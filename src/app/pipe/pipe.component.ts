import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  informacion: any = [
    { codigo: 1, nombre: 'fabian', apellido: 'estrella', sueldo: 120000 },
    { codigo: 2, nombre: 'lynna', apellido: 'yaguana', sueldo: 120000 },
    { codigo: 3, nombre: 'ambar', apellido: 'reyes', sueldo: 120000 },
    { codigo: 4, nombre: 'mely', apellido: 'cely', sueldo: 120000 }
  ];
  constructor() {}

  ngOnInit() {}
}
