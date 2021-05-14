import { Inject, Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CookiesServiceController } from "./cookies.service";

@Injectable()
export class TranslateServiceController{

    constructor(private translate:TranslateService, 
        @Inject(CookiesServiceController) private _cookiesService: CookiesServiceController){}

    lg:string = "cat";
    langs:string[]=[];

    manageTranslations(){
        this.translate.setDefaultLang('cat');
        //Al iniciar el componente recuperamos el idioma de las cookies y lo aplicamos.
        this.lg = this._cookiesService.getCookie("lang");
        //En el caso de que no haya ningún idioma establecido aplicamos el siguiente:
        if(this.lg == ""){
          this.lg = "cat";
        }
        this.translate.use(this.lg);
        this.translate.addLangs(['es','cat']);
        this.langs = this.translate.getLangs();
    }

    changeLang(lang:string){
        this.translate.use(lang);
        //Guardo el idioma en la cookies.
        document.cookie = "lang=" + lang;
        this._cookiesService.setCookie("lang", lang);
        //Actualizo la página para eliminar posibles textos ya traducidos mostrados a través del typescript.
        window.location.reload();
    }

    getCurrentLang(){
        let lg = this._cookiesService.getCookie("lang");
        if(lg == ""){
            lg = "cat";
        }
        return lg;
    }

}