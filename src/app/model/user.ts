export class User{

    firstName : string;
    lastName : string;
    email : string;
    companyname : string;
    numofemployee : number;
    telephone : string;
    lang : string;

    constructor(firstName:string, lastName:string, email:string, companyname:string, 
        numofemployee:number, telephone:string, lang:string
        ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.companyname = companyname;
        this.numofemployee = numofemployee;
        this.telephone = telephone;
        this.lang = lang;
    }
}