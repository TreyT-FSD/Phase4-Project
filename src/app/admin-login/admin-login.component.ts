import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin = new Admin();
  validAdmin = new Admin();

  constructor(private _admSvc: AdminService, private _router: Router) { }

  ngOnInit(): void {
    this._admSvc.getAdmin().subscribe(
      result => {
        this.validAdmin = result
      },
      error => {
        console.log(error);
      });
  }

  login() {
    var isValidAdmin: boolean = false;

    if (this.validAdmin.username.toLowerCase() == this.admin.username.toLowerCase() &&
      this.validAdmin.password == this.admin.password) {

      sessionStorage.setItem("isAdmin", "true");
      sessionStorage.setItem("adminId", this.validAdmin.id.toString());
      sessionStorage.setItem("adminUsername", this.validAdmin.username);

      this._router.navigate(["admin"]);

    } else {
      // console.log("admin login failed");
      alert("Login Failed.")
    }

  }

}
