import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-novocadastro',
  templateUrl: './novocadastro.component.html',
  styleUrls: ['./novocadastro.component.css']
})
export class NovocadastroComponent implements OnInit {

  // formulario: FormGroup;

  // constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.formulario = this.fb.group({

  //     lanche: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
  //     tamanho: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
  //     ingredientes: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
  //     preco: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],

  //   })

    ngOnInit(): void {}
  }




