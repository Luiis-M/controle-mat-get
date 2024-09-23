import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../_services/authentication.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router 
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      setor: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.authService
        .register(email, password)
        .then((result) => {
          console.log('Usuário registrado com sucesso:', result);
          this.successMessage = 'Cadastro realizado com sucesso!';
          this.errorMessage = null;

          // Redireciona para a página home após o cadastro
          this.router.navigate(['home']); 
        })
        .catch((error) => {
          this.successMessage = null;
          switch (error.code) {
            case 'auth/email-already-in-use':
              this.errorMessage = 'Este email já está em uso. Tente outro ou faça login.';
              break;
            case 'auth/invalid-email':
              this.errorMessage = 'Email inválido. Por favor, insira um email válido.';
              break;
            case 'auth/weak-password':
              this.errorMessage = 'A senha é muito fraca. Escolha uma senha mais forte.';
              break;
            default:
              this.errorMessage = 'Erro no cadastro: ' + error.message;
          }
          console.error('Erro no cadastro:', error);
        });
    } else {
      this.errorMessage = 'Preencha todos os campos corretamente.';
      this.successMessage = null;
    }
  }
}
