import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RespostaCadastro, UsuarioDto } from '../models';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  constructor(private httpclient:HttpClient, private router :Router){}
    usuario: string = "";
    senha: string = "";

    async Cadastrar(){
      let _usuarioDto:UsuarioDto = new UsuarioDto();
        _usuarioDto.usuario = this.usuario;
        _usuarioDto.senha = this.senha;

        let resposta:RespostaCadastro = await firstValueFrom (this.httpclient.post<RespostaCadastro>("http://localhost:5178/FakeBook/cadastro", _usuarioDto))
          if (resposta._respostacadastro==true){
            alert("Usuario Cadastrado")
            this.router.navigate(["inicio"])
          }
          if (resposta._respostacadastro==false){
            alert("Usuario Ja Cadastrado")
          }
    }
}