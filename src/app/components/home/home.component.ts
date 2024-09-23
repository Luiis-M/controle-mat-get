import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authService: AuthenticationService, private router: Router) {}

  onLogout() {
  this.authService.logout().subscribe({
    next: () => {
      console.log('Usuário deslogado com sucesso');
      this.router.navigate(['/login']); // Redireciona para a página de login após o logout
    },
    error: (error: unknown) => {
      console.error('Erro ao deslogar:', error);
    }
  });
}
}
