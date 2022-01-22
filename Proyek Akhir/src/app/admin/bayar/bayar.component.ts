import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { ApiService } from 'src/app/services/api.service';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { RekComponent } from '../rek/rek.component';
import { ShowComponent } from '../show/show.component';

@Component({
  selector: 'app-bayar',
  templateUrl: './bayar.component.html',
  styleUrls: ['./bayar.component.scss']
})
export class BayarComponent implements OnInit {
  title:any;
  books:any=[];
  userData: any = {};
  constructor(
    public dialog: MatDialog,
    public api: ApiService,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) { 
    
  }

  ngOnInit(): void {
    this.title='Bayar';
    this.auth.user.subscribe(user=>{
      this.userData = user;
      this.getBooks();
    }); 
  }

  loading: boolean | undefined;
  getBooks()
  {
    this.loading=true;
    this.db.collection('books',ref=>{
      return ref.where('uid','==', this.userData.uid);
    }).valueChanges({idField : 'id'}).subscribe(res=>{
      console.log(res);
      this.books=res;
      this.loading=false;
    },err=>{
      this.loading=false;
    })
  }


  loadingDelete:any={};

  uploadFile(data: any)
  {
    let dialog=this.dialog.open(FileUploaderComponent,{
      width:'400px',
      data: data
    });
    dialog.afterClosed().subscribe(res=>{
      return;
    })
  }

  detailItem(data: any, idx: any) {
    let dialog = this.dialog.open(ShowComponent, {
      width: '450px',
      data: data,
    });

    dialog.afterClosed().subscribe((res) => {
      console.log('card ditutup');
    });
  }

  rek(data: any, idx: any)
  {
    let dialog=this.dialog.open(RekComponent,{
      width:'800px',
      data: data
    });
    dialog.afterClosed().subscribe(res=>{
      return;
    })
  }

  downloadFile(data: any)
  {
    FileSaver.saveAs('books/'+data.url);
  }
}

