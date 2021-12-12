import { Cardapio } from './../models/cardapio';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  listaCardapio: Cardapio[] = [
    { _id: '1', lanche:  '#1', tamanho: 'Pequeno', 'ingredientes': 'Carne tomate e cebola', preco: '10.00' },
    { _id: '1', lanche:  '#2', tamanho: 'Médio', 'ingredientes': 'Carne tomate e cebola', preco: '15.00' },
    { _id: '1', lanche:  '#3', tamanho: 'Grande', 'ingredientes': 'Carne tomate e cebola', preco: '20.00' },
    { _id: '1', lanche:  '#4', tamanho: 'Pequeno', 'ingredientes': 'Carne tomate e cebola', preco: '10.00' },
    { _id: '1', lanche:  '#5', tamanho: 'CardapioService', 'ingredientes': 'Carne tomate e cebola', preco: '10.00' }
  ];

  constructor() { }
}
