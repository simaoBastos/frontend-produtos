import { Component } from '@angular/core';
import { Produto } from './produto/produto';
import { ProdutoDados } from './produto/produto.model';

@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  produto: ProdutoDados[] = [
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

  comprarProduto(produto: ProdutoDados) {
    console.log(`${produto.nome} comprado!`);
  }
}
