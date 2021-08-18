import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { AuthGaurd } from '../services/auth-gaurd.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _authGaurd:AuthGaurd) { }

  ngOnInit(): void {
  }

  logout(){
    this._authGaurd.adminLogout();
  }

}
