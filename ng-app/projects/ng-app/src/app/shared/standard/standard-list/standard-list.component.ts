import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { AuthService } from '../../auth/auth.service';
import { StandardService } from '../standard.service';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { TitleDisplayPipe } from '../../pipes/title-display.pipe';
import { Router } from '@angular/router';
import { PageLoaderService } from '../../templates/page-loader/page-loader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-standard-list',
    templateUrl: './standard-list.component.html',
    styleUrls: ['./standard-list.component.css']
})
export class StandardListComponent implements OnInit, AfterViewInit {
    @Input() showDefaultBtn = true;
    @Input() columns: any[];
    @Input() filterList: any[];
    @Input() domainName: string;
    @Input() title: string;
    @Input() actions: any[];
    @Input() queryModel: any;
    @Input() addNewItemLink: string;
    @Input() baseUrl: string;
    @Input()
    set includes(includes: string[]) {
        if (!this.queryModel) {
            this.queryModel = {};
        }

        this.queryModel.includes = includes || [];
    }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    isAuth = false;
    selectedItems = [];
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[];
    totalItems = 0;

    constructor(
        private service: StandardService,
        private authService: AuthService,
        private datePipe: DatePipe,
        private router: Router,
        private pageLoaderService: PageLoaderService,
        private titleDisplayPipe: TitleDisplayPipe,
        private currencyPipe: CurrencyPipe,
        private toastr: ToastrService
    ) {
        this.isAuth = this.authService.getIsAuth();
        this.authService.getAuthStatusListener().subscribe(isAuth => (this.isAuth = isAuth));
    }

    ngOnInit() {
        this.initial(this.domainName);

        if (!this.baseUrl) {
            this.baseUrl = `/${this.domainName}`;
        }

        if (!this.addNewItemLink) {
            this.addNewItemLink = '/' + this.domainName + '/add';
        }

        this.displayedColumns = this.columns.map(x => x.name);
        this.displayedColumns.unshift('checkbox');
        this.displayedColumns.push('action');

        this.columns.forEach(column => {
            if (!column.displayName) {
                column.displayName = this.titleDisplayPipe.transform(column.name);
            }
            if (!column.format) {
                column.format = 'display';
            }
            if (!this.filterList) {
                this.filterList = [];
            }
            this.filterList.push({ type: column.name, displayName: column.displayName, queryType: 'string' });
        });

        this.service.getRefreshListerner().subscribe(() => {
            this.fetchAll();
        });
        this.service.setRefreshListerner();
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        merge(this.sort.sortChange, this.paginator.page).subscribe(() => {
            this.queryModel.currentPage = this.paginator.pageIndex;
            this.fetchAll();
        });
    }

    initial(domainName) {
        if (!this.queryModel) {
            this.queryModel = {};
        }

        if (!('pageSize' in this.queryModel)) {
            this.queryModel.pageSize = 10;
        }
        if (!('currentPage' in this.queryModel)) {
            this.queryModel.currentPage = 0;
        }

        this.service.init(domainName, this.queryModel);
    }

    fetchAll() {
        this.pageLoaderService.toggle(true);
        return this.service.fetchAll(this.queryModel).subscribe(
            (res: any) => {
                this.dataSource = new MatTableDataSource<any>(res.data);
                this.totalItems = res.totalItems;
                this.pageLoaderService.toggle(false);
            },
            (res: any) => {
                this.pageLoaderService.toggle(false);
                this.toastr.error(res.error.message);
            }
        );
    }

    delete(item) {
        this.service.delete(item);
    }

    sortData(sort: Sort) {
        this.service.sort(sort);
    }

    applyFilter() {
        this.fetchAll().add(() => this.paginator.firstPage());
    }

    getValue(item, column) {
        let value = item[column.name];

        if (column.name.includes('.')) {
            let thisVal = item;
            column.name.split('.').forEach(ele => {
                if (!thisVal) {
                    return;
                }
                thisVal = thisVal[ele];
            });
            value = thisVal;
        }

        switch (column.type) {
            case 'date':
            case 'time':
                value = this.datePipe.transform(value, column.dateFormat || 'hh:mm a, dd-MM-yyyy');
                break;
            case 'currency':
                value = this.currencyPipe.transform(value);
                break;
            case 'array':
                let arrayIndex = column.index || 0;

                if (value && value.length && column.key) {
                    arrayIndex = value.findIndex((currentVal, index, arr) => {
                        return currentVal[column.key] === column.keyVal;
                    });
                }

                value = value && value.length && arrayIndex > -1 ? value[arrayIndex][column.fieldName] : null;
                break;
            default:
                break;
        }

        if (!value) {
            value = column.default;
        }

        return value;
    }

    toggleItemSelection() {
        this.selectedItems = this.dataSource.data.filter(x => x.selected);
    }

    executeAction(action) {
        if (action.format === 'link' && action.link) {
            this.router.navigate([action.link]);
        }

        if (action.format === 'function' && action.function) {
            action.function(action.isMultiple ? this.selectedItems : this.selectedItems[0]);
        }
    }

    showAction(action) {
        if (action.default) {
            return true;
        }

        if (this.selectedItems.length === 0) {
            return false;
        }

        if (this.selectedItems.length > 1 && !action.isMultiple) {
            return false;
        }

        return true;
    }

    renderTemplate(column, item) {
        const html = column.template(item);
        return html;
    }
}
