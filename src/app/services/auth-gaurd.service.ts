import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGaurd implements CanActivate{

    constructor(private _router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.isAdmin()){
            return true;
        }
        else{
            this._router.navigate(["admin-login"]);
            return false;
        }
    }

    isAdmin(): boolean{
        let isLoggedIn = false;

        if(sessionStorage.getItem("isAdmin") == 'true'){
            isLoggedIn=true;
        }

        return isLoggedIn;
    }

    adminLogout(){
        sessionStorage.removeItem("isAdmin");
    }
    
}