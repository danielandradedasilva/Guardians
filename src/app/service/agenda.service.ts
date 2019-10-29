import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Agenda } from '../interface/agenda';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agendaCollection: AngularFirestoreCollection<Agenda>;

  constructor(private afs: AngularFirestore) {
    this.agendaCollection = this.afs.collection<Agenda>('Agenda');
  }

  getAllAgenda() {
    return this.agendaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addAgenda(agenda: Agenda) {
    return this.agendaCollection.add(agenda);
  }

  getAgenda(id: string) {
    return this.agendaCollection.doc<Agenda>(id).valueChanges();
  }

  updateAgenda(id: string, agenda: Agenda) {
    return this.agendaCollection.doc<Agenda>(id).update(agenda);
  }

  deleteAgenda(id: string) {
    return this.agendaCollection.doc(id).delete();
  }
}
