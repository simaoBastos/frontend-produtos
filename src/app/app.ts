import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  produto: Produto[] = [
    {
      nome: 'Mouse',
      preco: 50.0,
      quantidade: 10,
    },
    {
      nome: 'Teclado',
      preco: 75.0,
      quantidade: 15,
    },
    {
      nome: 'Monitor',
      preco: 900.0,
      quantidade: 5,
    },
  ];
}

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
}
