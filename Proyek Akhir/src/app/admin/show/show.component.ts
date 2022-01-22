import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Item {
  name: string;
  address: string;
  city: string;
  province: string;
  post: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  userData: any = {};
  user: any = {};

  constructor(
    public dialogRef: MatDialogRef<ShowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe((res)=>{
      this.userData = res;
    })
  }

}