import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorComponent } from 'src/app/alerts/error/error.component';
import { SuccesComponent } from 'src/app/alerts/succes/succes.component';
import { User } from 'src/app/model/user';
import { CookiesServiceController } from 'src/app/services/cookies.service';
import { TranslateServiceController } from 'src/app/services/translate.service';
import { UserServiceController } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-cover-signup',
  templateUrl: './auth-cover-signup.component.html',
  styleUrls: ['./auth-cover-signup.component.css'],
  providers: [UserServiceController, CookiesServiceController, SuccesComponent, ErrorComponent, TranslateServiceController],
})
export class AuthCoverSignupComponent implements OnInit {


  constructor(private _userService:UserServiceController, private _cookiesService:CookiesServiceController,
    private translate: TranslateService, @Inject(SuccesComponent) private _succesComponent: SuccesComponent,
    @Inject(ErrorComponent) private _errorComponent: ErrorComponent, 
    private translateService:TranslateServiceController) {
      this.translateService.manageTranslations();}

  ngOnInit(): void {
  }

  firstName : string;
  lastName : string;
  email : string;
  companyname : string;
  numofemployee : number;
  telephone : string;
  terms:boolean;

  register(event){
    this._userService.signup(new User(this.firstName, this.lastName, this.email, this.companyname, this.numofemployee, this.telephone,this.translateService.getCurrentLang()))
    .subscribe(
      (result) => {
        if(result.status){
          event.target.reset();
          this.translate.get('USUARIAFEGIT')
          .subscribe(
              (res: string) =>{
                this._succesComponent.succesPopup(true, res);
              }
          );
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
