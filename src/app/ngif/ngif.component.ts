import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  categorias: any = [
    { codigo: 0, texto: 'todos' },
    { codigo: 1, texto: 'Politica' },
    { codigo: 2, texto: 'Educacion' },
    { codigo: 3, texto: 'Seguridad' }
  ];
  temporal: any;
  noticia: any = [
    {
      categoria: {
        codigo: 1,
        texto: 'Politica'
      },
      titulo: 'prueba de titulo',
      texto: 'prueba de texto',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNg0I3lkCWPk-fq-YK7Ljcj7YcrqugxkpOslA9Zq1RmQRHwTLVVg'
      // tslint:disable-next-line: semicolon
    },
    {
      categoria: {
        codigo: 1,
        texto: 'Politica'
      },
      titulo: 'prueba de titulo',
      texto: 'prueba de texto',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNg0I3lkCWPk-fq-YK7Ljcj7YcrqugxkpOslA9Zq1RmQRHwTLVVg'
      // tslint:disable-next-line: semicolon
    },
    {
      categoria: {
        codigo: 2,
        texto: 'Politica'
      },
      titulo: 'prueba de titulo',
      texto: 'prueba de texto',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNg0I3lkCWPk-fq-YK7Ljcj7YcrqugxkpOslA9Zq1RmQRHwTLVVg'
      // tslint:disable-next-line: semicolon
    },
    {
      categoria: {
        codigo: 1,
        texto: 'Politica'
      },
      titulo: 'prueba de titulo',
      texto: 'prueba de texto',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNg0I3lkCWPk-fq-YK7Ljcj7YcrqugxkpOslA9Zq1RmQRHwTLVVg'
      // tslint:disable-next-line: semicolon
    },
    {
      categoria: {
        codigo: 2,
        texto: 'Politica'
      },
      titulo: 'prueba de titulo',
      texto: 'prueba de texto',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNg0I3lkCWPk-fq-YK7Ljcj7YcrqugxkpOslA9Zq1RmQRHwTLVVg'
      // tslint:disable-next-line: semicolon
    }
  ];
  constructor() {
    this.temporal = this.noticia;
    console.log(this.temporal);
  }

  ngOnInit() {}
  eventoControl(evento) {
    if (evento.target.value == 0) {
      this.noticia = this.temporal;
    } else {
      this.noticia = this.temporal.filter(item => {
        return item.categoria.codigo == evento.target.value;
      });
    }
  }
}
