import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

   texto="Alo Rodrigo"
  constructor() { }

  cardapio = [
    {
      _id: '1',
      lanche: '#1',
      tamanho: 'Pequeno',
      ingredientes: 'Carne tomate e cebola',
      preco: '10.00',
    },
    {
      _id: '1',
      lanche: '#2',
      tamanho: 'Médio',
      ingredientes: 'Carne tomate e cebola',
      preco: '15.00',
    },
    {
      _id: '1',
      lanche: '#3',
      tamanho: 'Grande',
      ingredientes: 'Carne tomate e cebola',
      preco: '20.00',
    },
    {
      _id: '1',
      lanche: '#4',
      tamanho: 'Pequeno',
      ingredientes: 'Carne tomate e cebola',
      preco: '10.00',
    },
    {
      _id: '1',
      lanche: '#5',
      tamanho: 'CardapioComponent',
      ingredientes: 'Carne tomate e cebola',
      preco: '10.00',
    },
  ];

  ngOnInit(): void {
  }

}
