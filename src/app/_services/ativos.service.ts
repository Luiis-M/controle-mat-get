import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Ativos } from '../_interfaces/ativos';

@Injectable({
  providedIn: 'root'
})
export class AtivosService {
  private collectionName = 'ativos';

  constructor(
    private firestore: AngularFirestore
  ) { }

  adcionarAtivos(ativos: Ativos) {
    return this.firestore.collection(this.collectionName).add(ativos);
  }
}
