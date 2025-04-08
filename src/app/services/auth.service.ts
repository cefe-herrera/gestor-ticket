import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

   // Método para simular un inicio de sesión, actualizando el estado a true.
   login(): void {
    // Aquí puedes agregar la lógica para autenticar al usuario.
    this.loggedInSubject.next(true);
  }

  // Método para simular el cierre de sesión, actualizando el estado a false.
  logout(): void {
    // Aquí puedes agregar la lógica para cerrar la sesión del usuario.
    this.loggedInSubject.next(false);
  }

  getIsLoggedIn() {
    return this.loggedInSubject.asObservable();
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this.loggedInSubject.next(isLoggedIn);
  }
  
}
