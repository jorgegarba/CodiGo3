import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  canchitasCollection:AngularFirestoreCollection;
  constructor(private _sFirestore:AngularFirestore,
              private _sFireData:AngularFireDatabase) {
    this.canchitasCollection = _sFirestore.collection("canchitas");
  }
  getCanchitas():Observable<any>{
    return this.canchitasCollection.valueChanges();
  }    
}
