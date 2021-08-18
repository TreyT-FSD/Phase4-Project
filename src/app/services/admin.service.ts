import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Admin } from "../models/admin";

@Injectable()
export class AdminService {


    ADMIN_API_URL: string = "http://localhost:3000";

    constructor(private _http: HttpClient) { }

    getAdmin(): Observable<Admin> {
        return this._http.get<Admin>(this.ADMIN_API_URL + "/admin/1");
    }
}