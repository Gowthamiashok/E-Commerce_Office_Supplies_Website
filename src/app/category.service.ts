import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private dB:AngularFireDatabase) { }

  getCategories(){
    return this.dB.list('/categories', ref => ref.orderByChild('name')).snapshotChanges()

  }
}