import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './usuario';
import { Validacoes } from './validacoes';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  formularioDeUsuario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.criarFormularioDeUsuario();
  }

  enviarDados(){
    const dadosFormulario = this.formularioDeUsuario.value;

    const usuario = new Usuario(
      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.cpf,
      dadosFormulario.nascimento,
      dadosFormulario.senha
    );

    alert(`O usuário ${usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);

    this.formularioDeUsuario.reset();

  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group({
      nome: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],
      email: ['',
        Validators.compose([
          Validators.email
         ])],
      cpf: ['', Validators.compose([
        Validators.required,
        Validacoes.ValidaCpf
      ])],
      nascimento: ['',
      Validators.compose([
        Validators.required,
        Validacoes.MaiorQue18Anos
      ])  
    ],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])],
      confirmarSenha: ['', Validators.compose([
        Validators.required
      ])]
    },
    {
      validator: Validacoes.SenhasCombinam
    }
    
    );
  }

  get nome() {
    return this.formularioDeUsuario.get('nome');
  }

  get email() {
    return this.formularioDeUsuario.get('email');
  }

  get cpf() {
    return this.formularioDeUsuario.get('cpf');
  }

  get nascimento() {
    return this.formularioDeUsuario.get('nascimento');
  }

  get senha() {
    return this.formularioDeUsuario.get('senha');
  }

  get confirmarSenha() {
    return this.formularioDeUsuario.get('confirmarSenha');
  }



}
