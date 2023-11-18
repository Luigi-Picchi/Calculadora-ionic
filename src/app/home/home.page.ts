import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: string = '0';
  primeiro_elemento: string = '';
  segundo_elemento: string = '';
  operador_selecionado: string = '';
  comeca_segundo_elemento: boolean = false;
  memoria: string = '';
  resultado_concluido: boolean = false;

  constructor() { }

  // pega a entrada de digitos e faz algumas validações
  digito(valor: string) {
    // se o resultado já foi calculado e o usuário digitou um numero, limpa a tela e seta o resultado como primeiro elemento
    if (this.resultado_concluido && !this.comeca_segundo_elemento) {
      this.resultado = valor;
      this.resultado_concluido = false;
      this.segundo_elemento = '';
    } else {
      this.resultado = this.comeca_segundo_elemento ? this.resultado + valor : (this.resultado == '0' ? valor : this.resultado + valor);
      if (this.comeca_segundo_elemento) {
        this.segundo_elemento += valor;
      }
    }
  }

  // processa entrada de operadores e setar o estado de algumas variaveis
  operador(valor: string) {
    if (!this.comeca_segundo_elemento) {
      this.primeiro_elemento = this.resultado;
      this.resultado += valor;
      this.comeca_segundo_elemento = true;
      this.operador_selecionado = valor;
      this.resultado_concluido = false;
    }
  }

  // limpa a tela e as variáveis
  redefinir() {
    this.resultado = "0";
    this.primeiro_elemento = '';
    this.segundo_elemento = '';
    this.operador_selecionado = '';
    this.comeca_segundo_elemento = false;
    this.memoria = '';
  }

  // calcula e converte os tipos
  calcular() {
    if (this.segundo_elemento != "") {
      switch (this.operador_selecionado) {
        case '+':
          this.resultado = (parseInt(this.primeiro_elemento) + parseInt(this.segundo_elemento)).toString();
          break;
        case '-':
          this.resultado = (parseInt(this.primeiro_elemento) - parseInt(this.segundo_elemento)).toString();
          break;
        case '*':
          this.resultado = (parseInt(this.primeiro_elemento) * parseInt(this.segundo_elemento)).toString();
          break;
        case '/':
          if (this.segundo_elemento == '0') {
            this.resultado = 'Erro: divisão por zero';
            return;
          } else {
            this.resultado = (parseInt(this.primeiro_elemento) / parseInt(this.segundo_elemento)).toString();
          }
          break;
        case '^':
          this.resultado = Math.pow(parseInt(this.primeiro_elemento), parseInt(this.segundo_elemento)).toString();
          break;
      }
      this.memoria = this.primeiro_elemento + this.operador_selecionado + this.segundo_elemento + "=" + this.resultado;
      this.resultado_concluido = true;

      // seta as variaveis pra poder utilizar o resultado como primeiro elemento e continuar o calculo
      this.primeiro_elemento = this.resultado;
      this.segundo_elemento = '';
      this.operador_selecionado = '';
      this.comeca_segundo_elemento = false;
    }
  }
}