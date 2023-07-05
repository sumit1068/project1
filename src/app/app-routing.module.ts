import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareerComponent } from './components/career/career.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PermananetJobsComponent } from './components/permananet-jobs/permananet-jobs.component';
import { ContructJobsComponent } from './components/contruct-jobs/contruct-jobs.component';
import { authGuard } from './guards/auth.guard';
import { PhotoResolverService } from './services/photo-resolver.service';
import { canActiveChildAuthGuard } from './guards/can-active-child-auth.guard';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent,canActivate:[authGuard]},
  { path: 'careers', component: CareerComponent,
children:[
  {path:'permanenet',component:PermananetJobsComponent},
  {path:'contruct',component:ContructJobsComponent,canActivate: [authGuard],},
],
//canActivateChild:[canActiveChildAuthGuard],
},
  { path: '', component: HomeComponent },
  {
    path: 'photos',    component: PhotosComponent,
    resolve: { myPhotos: PhotoResolverService },
  },
  
  { path: 'photodetails/:id', component: PhotoDetailsComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'grocery', loadChildren: () => import('./grocery/grocery.module').then(m => m.GroceryModule) },
  { path: 'travels', loadChildren: () => import('./travels/travels.module').then(m => m.TravelsModule) },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
