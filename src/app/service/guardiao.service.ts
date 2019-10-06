import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Guardiao } from '../interface/guardiao';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardiaoService {
  private guardiaoCollection: AngularFirestoreCollection<Guardiao>;

  constructor(private afs: AngularFirestore) {
    this.guardiaoCollection = this.afs.collection<Guardiao>('Guardião');
  }

  getAllGuardiao() {
    return this.guardiaoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addGuardiao(guardiao: Guardiao) {
    return this.guardiaoCollection.add(guardiao);
  }

  getGuardiao(id: string) {
    return this.guardiaoCollection.doc<Guardiao>(id).valueChanges();
  }

  updateGuardiao(id: string, guardiao: Guardiao) {
    return this.guardiaoCollection.doc<Guardiao>(id).update(guardiao);
  }

  deleteGuardiao(id: string) {
    return this.guardiaoCollection.doc(id).delete();
  }
}
