import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  logout() {
    return from(this.afAuth.signOut());
  }

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
}
