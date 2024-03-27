import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RespostaInicio, Usuario } from '../models';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private httpclient:HttpClient, private router :Router){}
    usuario1: string = "";
    senha: string = "";

    async Entrar(){
      let UsuarioDto:Usuario = new Usuario();
        UsuarioDto.usuario1 = this.usuario1;
        UsuarioDto.senha = this.senha;

        let resposta:RespostaInicio = await firstValueFrom (this.httpclient.post<RespostaInicio>("http://localhost:5178/FakeBook/iniciar", UsuarioDto))
          if (resposta._respostainicio==true){
            
            this.router.navigate(["home"])
          }
          if (resposta._respostainicio==false){
            alert("Usuario Invalido")
          }
    }
    async Cadastrar(){
      this.router.navigate(["cadastro"])
    }
}
