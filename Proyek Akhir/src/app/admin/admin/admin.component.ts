import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
user: any={};
  constructor(
    public api: ApiService,
    public router: Router,
    public auth: AngularFireAuth,
    public db: AngularFirestore
  ) { }

  ngOnInit(): void {
    //this.checkLogin();
  }
  mode:string='side';

  menu=[
    {
      name:'Dashboard',
      icon:'dashboard',
      url:'/admin/dashboard'
    },
    {
      group:'Menu Group',
      children:[
        {
          name:'Image Gallery',
          icon:'images',
          url:'/admin/gallery'
        }
      ]
    }
  ];
  
  //checkLogin()
  
 // {
   // this.api.get('bookswithauth/status').subscribe(res=>{
      //is logged in
     // return;
    //},error=>{
      // not logged in
     // this.router.navigate(['/login']);
    //})
  //}

  logout(){
    return this.auth.signOut().then(()=> {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
    }
  }

