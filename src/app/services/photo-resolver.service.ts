import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PhotosService } from './photos.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoResolverService implements Resolve<any> {

  constructor(private photosService:PhotosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.photosService.getPhotos();
  }
}