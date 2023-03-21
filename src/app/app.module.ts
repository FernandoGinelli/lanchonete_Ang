// src/app/app.module.ts

import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"

import { AppComponent } from "./app.component";
import { TodoComponent } from './todo/todo.component';
import { AuthComponent } from './auth/auth.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ProdutosComponent } from './produtos/produtos.component'
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'products', component: ProdutosComponent },
  { path: 'cadusuario', component: CadastroUsuarioComponent }
];

@NgModule({
  declarations: [AppComponent, TodoComponent, AuthComponent, CadastroUsuarioComponent, ProdutosComponent],
  imports: [ RouterModule.forRoot(routes), BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
