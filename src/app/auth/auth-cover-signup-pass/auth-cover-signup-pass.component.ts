import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookiesServiceController } from 'src/app/services/cookies.service';
import { TranslateServiceController } from 'src/app/services/translate.service';
import { UserServiceController } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-cover-signup-pass',
  templateUrl: './auth-cover-signup-pass.component.html',
  styleUrls: ['./auth-cover-signup-pass.component.css'],
  providers: [UserServiceController, CookiesServiceController, TranslateServiceController],
})
export class AuthCoverSignupPassComponent implements OnInit {

  constructor(private _userService:UserServiceController, private _cookiesService:CookiesServiceController,
    private translate: TranslateService, private _router: Router, private _activRoute: ActivatedRoute, 
    private translateService:TranslateServiceController) {
      this.translateService.manageTranslations();
  }

  id : string;
  password:string;
  validation:string;
  
  ngOnInit(): void {
    this._activRoute.paramMap.subscribe(
      params => {
      this.id = params.get("id");
      }
    )  
    console.log(this.id); 
  }

  register(){
    this._userService.changePassword(this.id, this.password)
    .subscribe(
      (result) => {
        if(result){
          this._router.navigate(['/auth-cover-login']);
        }
      },
      (err) => {
      }
    );
  }

}
