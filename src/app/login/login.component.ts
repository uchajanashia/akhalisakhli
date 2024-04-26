import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  checkpassword = "" ;
  code = '';
  isMFA = false;
  PasswordRecovery = false;
  passwordreset = false;
  constructor(private authService: AuthService,private router: Router , private toastr :ToastrService) {}

  login() {
    this.authService.authenticate(this.email, this.password).subscribe(() => {
    this.toastr.success("2fa code send " , "check mail please")
    this.isMFA = true;
    this.code = ""
    },(error: HttpErrorResponse) => {
      console.log(error);
      console.log(error.error);

      if (error.status === 400 && error.error == 'Account Is Locked') {
        this.toastr.info('ანგარიში დროებით დაიბლოკებულია');
      } else {
        this.toastr.info('რაღაც შეცდომა მოხდა. გთხოვთ, სცადოთ თავიდან');
      }
    });
  }
   
  verifyMFA() {
    this.authService.verifyMFA(this.email, this.code).subscribe(() => {
        this.router.navigate(['/admin']);
            
    },
    (error) => {
      this.toastr.error("mfa code incorect")
    })
  }
  passwordrecoveryrequest(){
    this.PasswordRecovery = true
    this.email = "";
    this.password= "";

  }
  passwordrecoverysend(){
  
      this.authService.passwordRecoveryRequest(this.email).subscribe(
        () => {
          this.PasswordRecovery = false;
          this.passwordreset= true;
          this.toastr.success("check your email" , "we send mfa for recovery")
          
        },
        (error) => {
          console.error('Failed to initiate password reset:', error);
        }
      );
  }
  passwordReset(){
    if(this.password == this.checkpassword){
    this.authService.passwordreset(this.email , this.password , this.code).subscribe( () =>{
      this.isMFA = false;
      this.PasswordRecovery = false;
      this.passwordreset = false;
      this.toastr.success("your password changed")
    }),
    (error: any) =>{
      console.error("ver sheicvala passsowrd" , error)
    }}else{
      this.toastr.error(" Password does not match ")
    }
  }
  
}
