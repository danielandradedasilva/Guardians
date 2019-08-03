import { User, AuthOptions, AuthProvider } from './auth.types';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.authState$;
   }

   get isAuthenticated(): Observable<boolean> {
     return this.authState$.pipe(map(user => user !== null));
   }

  authenticate({ isSignIn, provider, user }: AuthOptions): Promise<auth.UserCredential> {
    let operation: Promise<auth.UserCredential>;

    if(provider !== AuthProvider.Email) {
      operation = this.signinWithEmail(user);
    } else {
      operation =  this.signUpWithEmail(user);
    }

    return operation;
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  private signinWithEmail({ email, password }: User): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  private signUpWithEmail({ name, email, password }: User): Promise<auth.UserCredential> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
        .then(credentials =>
          credentials.user
          .updateProfile({ displayName: name, photoURL: null })
            .then(() => credentials)
        );
     }
   }