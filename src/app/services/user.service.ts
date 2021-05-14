import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from "../model/user";


@Injectable()
export class UserServiceController{

    ruta:string = "http://localhost:2127/users";
    // ruta:string = "https://www.timeclick360.com/users";

    constructor(private conexHttp:HttpClient) { }

    signin(email:string, password:string):Observable<any>{
        let url = this.ruta + "/signin";
        let user = {
            email : email,
            password : password,
        }
        console.log(user);
        return this.conexHttp.post(url, user, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })  });
    }

    signup(user:User):Observable<any>{
        let url = this.ruta + "/signup";
        return this.conexHttp.post(url, user, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })  });
    }

    changePassword(id:string, pass:string){
        let data = {
            user_id: id,
            password: pass,
        }
        let url = this.ruta + "/setPassword";
        return this.conexHttp.post(url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })  });
    }

    sendEmail(email:string, lang:string){
        let url = this.ruta + "/recoverPass";
        let user = {
            email : email,
            lang: lang,
        }
        return this.conexHttp.post(url, user, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })  });
    }

}