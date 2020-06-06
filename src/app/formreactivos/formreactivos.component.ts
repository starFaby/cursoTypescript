import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactivos',
  templateUrl: './formreactivos.component.html',
  styleUrls: ['./formreactivos.component.css']
})
export class FormreactivosComponent implements OnInit {
  formulario: FormGroup;
  constructor(private frmbuilder: FormBuilder) {
    this.formulario = this.frmbuilder.group({
      nombre: ['nombre por defecto', [Validators.required]],
      apellido: ['apellido por defecto', [Validators.required]],
      email: ['reaveplayer@gmail.com', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]]
    })
  }

  ngOnInit() {}
  onsumit(parametro){
    console.log(parametro)
  }
}
