import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtivosService } from './../../_services/ativos.service';



@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrl: './ativos.component.css'
})
export class AtivosComponent {
  ativosForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ativosService: AtivosService
  ) {
    this.ativosForm = this.fb.group({
      proprietario: ['', Validators.required],
      responsavel: ['', Validators.required],
      grupo: ['', Validators.required],
      nf: ['', Validators.required],
      anoCompra: ['', Validators.required],
      codigoAtivo: ['', Validators.required],
      marca: ['', Validators.required],
      ns: ['', Validators.required],
      tipo: ['', Validators.required],
      sistemaOperacional: ['', Validators.required],
      localizacao: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ativosForm?.valid) {
      this.ativosService.adcionarAtivos(this.ativosForm.value)
        .then(() => {
          console.log('Ativo adicionado com sucesso!');
          this.ativosForm?.reset();
        })
        .catch((error) => {
          console.error('error ao adicionar ativo: ', error);
        });
    }
  }
}
