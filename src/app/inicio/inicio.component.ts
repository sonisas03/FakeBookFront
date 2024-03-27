import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RespostaInicio, UsuarioDto } from '../models';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private httpclient:HttpClient, private router :Router){}
    usuario: string = "";
    senha: string = "";

    async Entrar(){
      let _usuarioDto:UsuarioDto = new UsuarioDto();
        _usuarioDto.usuario = this.usuario;
        _usuarioDto.senha = this.senha;

        let resposta:RespostaInicio = await firstValueFrom (this.httpclient.post<RespostaInicio>("http://localhost:5178/FakeBook/iniciar", _usuarioDto))
          if (resposta._respostainicio==true){
            
            this.router.navigate(["home"])
          }
          if (resposta._respostainicio==false){
            alert("Usuario Invalido")
          }
    }
}
