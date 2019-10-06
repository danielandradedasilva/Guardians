import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Crianca } from '../interface/crianca';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CriancaService {
  private criancaCollection: AngularFirestoreCollection<Crianca>;

  constructor(private afs: AngularFirestore) {
    this.criancaCollection = this.afs.collection<Crianca>('Criança');
  }

  getAllCrianca() {
    return this.criancaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addCrianca(crianca: Crianca) {
    return this.criancaCollection.add(crianca);
  }

  getCrianca(id: string) {
    return this.criancaCollection.doc<Crianca>(id).valueChanges();
  }

  updateCrianca(id: string, crianca: Crianca) {
    return this.criancaCollection.doc<Crianca>(id).update(crianca);
  }

  deleteCrianca(id: string) {
    return this.criancaCollection.doc(id).delete();
  }
}
