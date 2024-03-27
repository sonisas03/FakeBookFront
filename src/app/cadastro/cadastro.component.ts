import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RespostaCadastro, Usuario } from '../models';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  constructor(private httpclient:HttpClient, private router :Router){}
    nome: string = "";
    apelido: string = ""; 
    contato: string = "";
    
    usuario1: string = "";
    senha: string = "";

    async Cadastrar(){
      let UsuarioDto:Usuario = new Usuario();
        UsuarioDto.usuario1 = this.usuario1;
        UsuarioDto.senha = this.senha;
        UsuarioDto.nome = this.nome;
        UsuarioDto.apelido = this.apelido;
        UsuarioDto.contato = this.contato; 
       

        let resposta:RespostaCadastro = await firstValueFrom (this.httpclient.post<RespostaCadastro>("http://localhost:5178/FakeBook/cadastro", UsuarioDto))
        
          if (resposta._respostacadastro==true){
            alert("Usuario Cadastrado")
            this.router.navigate(["inicio"])
          }
     
    }
}