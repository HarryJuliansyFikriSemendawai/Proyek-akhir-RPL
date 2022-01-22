import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { ProfileComponent } from './profile/profile.component';
import { PubgComponent } from './game/pubg/pubg.component';
import { MlComponent } from './game/ml/ml.component';
import { FfComponent } from './game/ff/ff.component';
import { CodComponent } from './game/cod/cod.component';
import { BayarComponent } from './bayar/bayar.component';
import { RekComponent } from './rek/rek.component';
import { AboutComponent } from './about/about.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent, 
    DashboardComponent, 
    ProductComponent,
    ProductDetailComponent,
    FileUploaderComponent,
    ProfileComponent,
    PubgComponent,
    MlComponent,
    FfComponent,
    CodComponent,
    BayarComponent,
    RekComponent,
    AboutComponent,
    ShowComponent
  ],
  entryComponents:[

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
