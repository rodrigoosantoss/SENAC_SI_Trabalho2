import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;

  //variável "formulario" é a que vai representar o formulário


  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      lanche: [null],
      tamanho: [null],
      ingredientes: [null],
      preco: [null]
    })
  }

  //componente que inicializa
  ngOnInit(): void {}

}
