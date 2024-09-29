import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  // Array de objetos que define os cards exibidos na página inicial
  cards = [
    {
      title: 'Notebooks',
      icon: 'laptop', // Ícone principal do card
      linkText: 'Ver mais',
      link: '/notebooks',
    },
    {
      title: 'Dispositivos de Rede',
      icon: 'router',
      linkText: 'Ver mais',
      link: '/dispositivos-de-rede',
    },
    {
      title: 'Impressoras',
      icon: 'print',
      linkText: 'Ver mais',
      link: '/impressoras',
    },
    {
      title: 'Periféricos',
      icon: 'mouse',
      linkText: 'Ver mais',
      link: '/perifericos',
    },
    {
      title: 'Novos itens',
      icon: 'add_circle',
      buttonText: 'Cadastrar',
      action: () => this.cadastrar(), // Ação que chama o método cadastrar()
    },
  ];

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

  cadastrar() {
    this.router.navigate(['/ativos']);  // Redireciona para a página de cadastro de ativos
  }
}
