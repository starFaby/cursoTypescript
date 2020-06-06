import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  faby = {
    nombre: ' fabystar ',
    direccion: ' ferro ',
    sucursal: 'A1'
  }

  eventoRaton(){
    console.log('diste click');
  }
}
