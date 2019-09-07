import { environment } from './../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {
  apiUrl: string;
  formData = this.formBuilder.group({
    password: [null, Validators.required],
    newPassword: [null, Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private http: HttpClient, private toastr: ToastrService) {
    this.apiUrl = `${environment.apiUrl}/service/user`;
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.http.post(this.apiUrl + '/changePassword', formData).subscribe((res: any) => {
      this.toastr.success(res.message);
      this.router.navigate(['/']);
    }, (res: any) => {
      this.toastr.error(res.error.message);
    });
  }

}
