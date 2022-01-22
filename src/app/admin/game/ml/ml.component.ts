import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.scss']
})
export class MlComponent implements OnInit {

  userData: any = {};
  constructor(
    public dialogRef:MatDialogRef<MlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api:ApiService,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe(res=>{
      this.userData = res;
    });
  }

  loading: boolean | undefined;
  saveData()
  {
    this.loading=true;
    if(this.data.id == undefined)
    {
      //simpan ke firebase
    let doc = new Date().getTime().toString();
    this.data.uid = this.userData.uid;
    this.db.collection('books').doc(doc).set(this.data).then(res=>{
      this.dialogRef.close(this.data);
      this.loading=false;
    }).catch(er=>{
      console.log(er);
      this.loading=false;
      alert('Tidak dapat menyimpan data');
    })
    }else{

      this.db.collection('books').doc(this.data.id).update(this.data).then(res=>{
        this.data.uid = this.userData.uid;
        this.dialogRef.close(this.data);
        this.loading=false;
      }).catch(er=>{
        console.log(er);
        this.loading=false;
        alert('Tidak dapat menyimpan data');
      })
    }
    
  }
}

