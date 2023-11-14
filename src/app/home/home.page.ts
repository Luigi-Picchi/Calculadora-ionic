import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: string = '0';
  checa_operador: boolean = false;
  primeiro_elemento: string = '';
  segundo_elemento: string = '';
  operador_selecionado: string = '';
  comeca_segundo_elemento: boolean = false;
  memoria: string = '';
  resultado_concluido: boolean = false;

  constructor() {}

  digito(valor: string){
    if(this.resultado_concluido){
      this.resultado = valor;
      this.resultado_concluido = false;
      this.checa_operador = false;
      this.segundo_elemento = '';
    }else{
    if(this.comeca_segundo_elemento) {
      this.segundo_elemento = this.segundo_elemento + valor;
      this.resultado =this.resultado + valor;
    }else{
    if(this.resultado =='0'){
      this.resultado = valor;
    } else{
    this.resultado = this.resultado + valor;
  }
}
  }
}

operador(valor: string){
  if(!this.checa_operador){
    this.primeiro_elemento = this.resultado;
  this.resultado += valor;
  this.checa_operador = true;
  this.comeca_segundo_elemento = true;
  this.operador_selecionado = valor;
  }
}

redefinir(){
  this.resultado = "0";
  this.checa_operador = false;
  this.primeiro_elemento = '';
  this.segundo_elemento = '';
  this.operador_selecionado = '';
  this.comeca_segundo_elemento = false;
  this.memoria = '';
}

calcular(){
  if(this.operador_selecionado == "+" && this.segundo_elemento != ""){
    this.resultado = (parseInt(this.primeiro_elemento) + parseInt(this.segundo_elemento)).toString();
    this.memoria = this.primeiro_elemento + this.operador_selecionado + this.segundo_elemento + "=" + this.resultado;
    this.resultado_concluido = true;
  }else if(this.operador_selecionado == "-" && this.segundo_elemento != ""){
    this.resultado = (parseInt(this.primeiro_elemento) - parseInt(this.segundo_elemento)).toString();
    this.memoria = this.primeiro_elemento + this.operador_selecionado + this.segundo_elemento + "=" + this.resultado;
    this.resultado_concluido = true;
  }else if(this.operador_selecionado == "*" && this.segundo_elemento != ""){
    this.resultado = (parseInt(this.primeiro_elemento) * parseInt(this.segundo_elemento)).toString();
    this.memoria = this.primeiro_elemento + this.operador_selecionado + this.segundo_elemento + "=" + this.resultado;
    this.resultado_concluido = true;
  }else if (this.operador_selecionado == "/" && this.segundo_elemento != ""){
    this.resultado = (parseInt(this.primeiro_elemento) / parseInt(this.segundo_elemento)).toString();
    this.memoria = this.primeiro_elemento + this.operador_selecionado + this.segundo_elemento + "=" + this.resultado;
    this.resultado_concluido = true;
  }
    }
  }



