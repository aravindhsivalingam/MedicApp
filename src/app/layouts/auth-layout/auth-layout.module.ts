import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxImageCompressService } from 'ngx-image-compress';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/pages/reset-password/reset-password.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  providers: [NgxImageCompressService]
})
export class AuthLayoutModule { }
