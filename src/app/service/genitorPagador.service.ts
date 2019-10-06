import { GenitorPagador } from './../interface/genitorPagador';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenitorPagadorService {
  private genitorPagadorCollection: AngularFirestoreCollection<GenitorPagador>;

  constructor(private afs: AngularFirestore) {
    this.genitorPagadorCollection = this.afs.collection<GenitorPagador>('Genitor Pagador');
  }

  getAllGenitorPagador() {
    return this.genitorPagadorCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addGenitorPagador(genitorPagador: GenitorPagador) {
    return this.genitorPagadorCollection.add(genitorPagador);
  }

  getGenitorPagador(id: string) {
    return this.genitorPagadorCollection.doc<GenitorPagador>(id).valueChanges();
  }

  updateGenitorPagador(id: string, genitorPagador: GenitorPagador) {
    return this.genitorPagadorCollection.doc<GenitorPagador>(id).update(genitorPagador);
  }

  deleteGenitorPagador(id: string) {
    return this.genitorPagadorCollection.doc(id).delete();
  }
}
