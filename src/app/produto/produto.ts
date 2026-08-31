import { Component, input, output } from '@angular/core';
import { ProdutoDados } from './produto.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.scss',
})
export class Produto {
  produto = input.required<ProdutoDados>();
  comprar = output<ProdutoDados>();
}
