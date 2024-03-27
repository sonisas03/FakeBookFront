import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models';
import { Observable, firstValueFrom } from 'rxjs';
import { ok } from 'assert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios$: Observable<Usuario[]> | undefined;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.obterUsuarios();
  }

  obterUsuarios(): void {
    this.usuarios$ = this.httpClient.get<Usuario[]>('http://localhost:5178/FakeBook/usuarios');
  }

  async eliminarUsuario(usuario: Usuario) {
   
    let resposta:Usuario = await firstValueFrom (this.httpClient.post<Usuario>("http://localhost:5178/FakeBook/eliminar", usuario))
    this.obterUsuarios();

  }
}
