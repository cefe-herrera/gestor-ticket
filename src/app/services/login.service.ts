import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private authService: AuthService ) { }

  login(email: string, password: string): void {
    // Aquí puedes implementar la lógica de autenticación
    this.authService.login()
    ;
  }
  
  logout(): void {
    this.authService.logout();
  }

}
