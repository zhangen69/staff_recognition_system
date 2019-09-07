import { HttpClient } from '@angular/common/http';
import { TitleDisplayPipe } from './../../pipes/title-display.pipe';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

interface IFieldOptions {
    name: string;
    type: string;
    displayName?: string;
    required?: boolean;
    default?: any;
    enum?: any;
    enumList?: IFieldEnumList[];
    fields?: any[];
    childName?: string;
    ref?: string;
    refName?: string;
    refValue: string;
    refOptions?: any[];
    refFilteredOptions?: Observable<any[]>;
    refChange?: IRefChange;
    add?: any;
}

type IRefChange = (refData: any, data: any) => any;

interface IFieldEnumList {
    key: string;
    value: string;
}

class FieldModel implements IFieldOptions {
    name: string;
    type: string;
    displayName?: string;
    required?: boolean;
    default?: any;
    enum?: any;
    enumList?: IFieldEnumList[];
    fields?: any[];
    childName?: string;
    ref?: string;
    refName?: string;
    refValue: string;
    refOptions?: any[];
    refFilteredOptions?: Observable<any[]>;
    refChange?: IRefChange;
    add?: any;

    constructor(private options: IFieldOptions, private titleDisplayPipe: TitleDisplayPipe, private http: HttpClient) {
        Object.keys(options).forEach((option: string) => {
            this[option] = options[option];
        });

        if (this.type === 'enum' && this.enum) {
            this.enumList = [];
            Object.keys(this.enum)
                .filter(x => typeof this.enum[x as any] !== 'number')
                .forEach((key: string) => {
                    this.enumList.push({ key: key, value: this.enum[key] });
                });
        } else if (this.type === 'ref') {
            if (!this.ref) {
                this.ref = this.name.replace(/([A-Z])/g, '-$1').toLowerCase();
            }

            if (!this.refName) {
                this.refName = 'name';
            }

            this.http.get(`${environment.apiUrl}/service/${this.ref}`).subscribe((res: any) => {
                this.refOptions = res.data;
            });
        } else if (this.type === 'table') {
            this.fields.forEach(field => {
                if (!field.displayName) {
                    field.displayName = this.titleDisplayPipe.transform(field.name);
                }
            });
        }

        if (!this.displayName) {
            this.displayName = this.titleDisplayPipe.transform(this.name);
        }
    }

    private _filterOptions(value: any): any[] {
        const filterValue = typeof value === 'string' ? value.toLowerCase() : value[this.refName].toLowerCase();

        return this.refOptions.filter(option => option[this.refName].toLowerCase().includes(filterValue));
    }
}

@Component({
    selector: 'app-standard-form-field',
    templateUrl: './standard-form-field.component.html',
    styleUrls: ['./standard-form-field.component.css']
})
export class StandardFormFieldComponent implements OnInit {
    @Input() parentField: any;
    @Input() field: FieldModel;
    @Input() formData: any;
    imagePreview: string;
    pickedImage: any = null;
    selectedTime: string;

    constructor(private toastr: ToastrService, private titleDisplayPipe: TitleDisplayPipe, private http: HttpClient) { }

    ngOnInit() {
        this.initial();
    }

    initial() {
        if (!this.formData) {
            this.formData = {};
        }
        this.field = new FieldModel(this.field, this.titleDisplayPipe, this.http);

        switch (this.field.type) {
            case 'object':
                if (!this.formData[this.field.name]) {
                    this.formData[this.field.name] = {};
                }
                break;
            case 'array':
            case 'table':
                if (!this.formData[this.field.name]) {
                    this.formData[this.field.name] = [{}];
                }
                break;
            case 'date':
                if (!this.formData[this.field.name]) {
                    this.formData[this.field.name] = new Date();
                }
                break;
            case 'time':
                let date = new Date();

                if (this.formData[this.field.name]) {
                    date = new Date(this.formData[this.field.name]);
                } else {
                    this.formData[this.field.name] = date;
                }

                const hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours().toString();
                const minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes().toString();

                this.selectedTime = `${hours}:${minutes}`;

                // console.log('time', this.selectedTime);

                break;
            case 'boolean':
                if (!this.formData[this.field.name]) {
                    this.formData[this.field.name] = false;
                }
                break;
            default:
                if (this.parentField && this.parentField.type === 'array' && !this.formData) {
                    this.formData = {};
                }
                break;
        }
    }

    onImagePicked(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];

        if (file.type.indexOf('image/') > -1) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result.toString();
            };
            reader.readAsDataURL(file);
            this.pickedImage = file;
        } else {
            this.toastr.error('Invalid MIME type, please select JPEG or PNG type image.');
        }
    }

    getOptions(): any[] {
        return [{ name: 'One', value: 1 }, { name: 'Two', value: 2 }, { name: 'Three', value: 3 }];
    }

    getRefValue(option, field) {
        // if (option && field.refChange) {
        //   this.field.refChange(option, this.formData);
        // }

        if (!field.refValue) {
            return option;
        }

        return option[field.refValue];
    }

    displayFn = item => {
        if (!item) {
            return undefined;
        }

        if (!this.field.refValue && this.field.refName) {
            return item[this.field.refName];
        }

        return item;
    }

    onAddItemInArray(array) {
        if (!array) {
            array = [];
        }

        if (this.field.add) {
            this.field.add(array);
        } else {
            array.push({});
        }
    }

    onRemoveItemFromArray(array, index) {
        array.splice(index, 1);
    }

    onUpdateTimeData() {
        console.log('selected time:', this.selectedTime);

        if (this.selectedTime) {
            const timeArr = this.selectedTime.split(':');
            const hour = Number(timeArr[0]);
            const minute = Number(timeArr[1]);

            const date = new Date();

            date.setHours(hour);
            date.setMinutes(minute);
            date.setSeconds(0);

            this.formData[this.field.name] = date;
            console.log('formData > ' + this.field.displayName, date);
        }
    }

    isShow(field): boolean {
        if (!field.isShow) {
            return true;
        }

        return field.isShow(this.formData);
    }
}
