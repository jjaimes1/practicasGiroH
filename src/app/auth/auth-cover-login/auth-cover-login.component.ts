import { Component, Inject } from '@angular/core';
import { UserServiceController } from 'src/app/services/user.service';
import {Router} from '@angular/router'
import { CookiesServiceController } from 'src/app/services/cookies.service';
import { TranslateService } from '@ngx-translate/core';
import { ErrorComponent } from 'src/app/alerts/error/error.component';
import { TranslateServiceController } from 'src/app/services/translate.service';

@Component({
  selector: 'app-auth-cover-login',
  templateUrl: './auth-cover-login.component.html',
  styleUrls: ['./auth-cover-login.component.css'],
  providers: [UserServiceController, CookiesServiceController, ErrorComponent, TranslateServiceController]
})
export class AuthCoverLoginComponent{

  email:string;
  password:string;

  constructor(private _userService:UserServiceController, private router: Router,
    private _cookieService:CookiesServiceController, private translate: TranslateService,
    @Inject(ErrorComponent) private _errorComponent: ErrorComponent, 
    private translateService:TranslateServiceController) {
      this.translateService.manageTranslations();
  }

  login(){
    this._userService.signin(this.email, this.password)
    .subscribe(
      (result) => {
        if(result.status){
          console.log("Has iniciado sesion");
            let token = result.data['token']; 
            this._cookieService.setCookie("token",token);
            localStorage.setItem("token", token);
            this.router.navigate(['/home/corporate']);
        }else{
          this.translate.get(result.data)
          .subscribe(
              (res: string) =>{
                this._errorComponent.errorPopup(true, res);
              }
          );     
        }
      },
      (err) => {
      }
    );
  }


}
