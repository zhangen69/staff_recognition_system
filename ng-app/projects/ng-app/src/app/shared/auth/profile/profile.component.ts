import { Router } from 'express';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  apiUrl: string;
  formData = this.formBuilder.group({
    _id: [null, Validators.required],
    username: [null, Validators.required],
    displayName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    avatarImageUrl: [''],
    signatureImageUrl: [''],
  });
  imagesPreview: any = {};

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private http: HttpClient, private router: Router) {
    this.apiUrl = `${environment.apiUrl}/service/user`;
  }

  ngOnInit() {
    this.http.get(this.apiUrl + '/fetchProfile').subscribe((res: any) => {
      this.formData.patchValue(res.data);
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    if (file.type.indexOf('image/') > -1) {

      this.formData.patchValue({ avatarImage: file });
      this.formData.get('avatarImage').updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.imagesPreview.avatarImage = reader.result.toString();
      };
      reader.readAsDataURL(file);
    } else {
      this.toastr.error('Invalid MIME type, please select JPEG or PNG type image.');
    }
  }

  onSubmit(formData) {
    this.http.put(this.apiUrl + '/updateProfile', formData).subscribe((res: any) => {
      this.toastr.success(res.message);
      this.router.navigate(['/']);
    });
  }

}
