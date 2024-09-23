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
  errorMessage: string | null = null; // Variável para armazenar a mensagem de erro

  constructor(private router: Router, private authService: AuthenticationService) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log('Usuário logado', user);
        this.errorMessage = null; // Limpa a mensagem de erro em caso de sucesso
        this.router.navigate(['home']); // Redireciona após login bem-sucedido
      },
      error: (error) => {
        console.error('Erro ao fazer login', error);
        // Tratamento de erro específico para usuário não encontrado
        if (error.code === 'auth/user-not-found') {
          this.errorMessage = 'Usuário não encontrado. Verifique o email e tente novamente.';
        } else if (error.code === 'auth/wrong-password') {
          this.errorMessage = 'Senha incorreta. Por favor, tente novamente.';
        } else {
          this.errorMessage = 'Erro ao fazer login: ' + error.message;
        }
      },
    });
  }

  goToRegister(): void {
    this.router.navigate(['/auth/cadastro']);
  }
}