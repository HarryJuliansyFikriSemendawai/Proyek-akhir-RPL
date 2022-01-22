import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:any={};
  hide: boolean=true;

  constructor(
    public api: ApiService,
    public router: Router,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }
  email = new FormControl('',[Validators.required, Validators.email]);
  password = new FormControl('',[Validators.minLength(6), Validators.required]);

  //register
  loading: boolean | undefined;
  register(user:any)
  {
    this.loading=true;
    this.auth.createUserWithEmailAndPassword(user.email, user.password).then(res=>{
      this.loading=false;
      alert('Registrasi berhasil');
      this.router.navigate(['auth/login']);
    }).catch(err=>{
      this.loading=false;
      alert('Ada Masalah....');
    });
  }
}
