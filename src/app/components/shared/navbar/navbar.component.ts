import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isLoggedIn!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.getIsLoggedIn().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
   }

  logout() {
    this.authService.logout();
    // Aquí puedes agregar la lógica adicional que necesites al cerrar sesión

    //redireccionar a la página de inicio o login
    this.router.navigate(['/login']);
  }

}
