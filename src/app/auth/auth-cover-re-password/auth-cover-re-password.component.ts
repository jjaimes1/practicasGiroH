import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ErrorComponent } from 'src/app/alerts/error/error.component';
import { CookiesServiceController } from 'src/app/services/cookies.service';
import { TranslateServiceController } from 'src/app/services/translate.service';
import { UserServiceController } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-cover-re-password',
  templateUrl: './auth-cover-re-password.component.html',
  styleUrls: ['./auth-cover-re-password.component.css'],
  providers: [CookiesServiceController, ErrorComponent, UserServiceController, TranslateServiceController],
})
export class AuthCoverRePasswordComponent {

  email:string;

  constructor(private router: Router,private _cookieService:CookiesServiceController, 
    private translate: TranslateService,private _userService:UserServiceController,
    @Inject(ErrorComponent) private _errorComponent: ErrorComponent, 
    private translateService:TranslateServiceController) {
      this.translateService.manageTranslations();
  }

  sendEmail(){
    this._userService.sendEmail(this.email, this.translateService.getCurrentLang())
    .subscribe(
      (result) => {
        console.log(result);
        // if(result.status){
        //   this.router.navigate(['/auth-cover-login']);
        // }else{
        //   this.translate.get(result.data)
        //   .subscribe(
        //       (res: string) =>{
        //         console.log(res);
        //         this._errorComponent.errorPopup(true, res);
        //       }
        //   );
        // }
      },
      (err) => {console.log(err);}
    );
  }

}
