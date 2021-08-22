import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';
import { Product } from '../models/product';
import { AdminService } from '../services/admin.service';
import { AuthGaurd } from '../services/auth-gaurd.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin: Admin = new Admin();
  


  constructor(
    private _adminSvc: AdminService,
    private _productSvc: ProductService) { }

  ngOnInit(): void {
    this.admin.id = parseInt(sessionStorage.getItem("adminId")!);  //to be on the admin page the admin must exist
    this.admin.username = sessionStorage.getItem("adminUsername")!;
  }

  changePassword(): void {
    
    this._adminSvc.updatePassword(this.admin)
      .subscribe(
        (result) => {
          console.log("Admin password updated");
        },
        (error) => {
          console.log(error);
        });

    this.admin.password = "";
    alert("Password Updated!");
  }


}
