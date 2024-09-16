import { Component } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';  
  password: string = '';  

  constructor(private router: Router, private authService: AuthenticationService) { }

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log('Usuário logado', user);
        this.router.navigate(['./components/home/home.component']);  // Redireciona após login bem-sucedido
      },
      error: (error) => {
        console.error('Erro ao fazer login', error);
        // Aqui você pode adicionar lógica para exibir uma mensagem de erro para o usuário
      }
    });
  }
  
  goToRegister(): void {
    this.router.navigate(['/auth/cadastro']);
  }
}