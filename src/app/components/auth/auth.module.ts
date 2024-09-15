import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Import RouterModule from the correct location
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'cadastro', pathMatch: 'full', component: RegisterComponent }
  // outras rotas dentro do módulo admin podem ser adicionadas aqui
];


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
