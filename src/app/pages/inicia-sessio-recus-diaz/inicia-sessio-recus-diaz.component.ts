import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicia-sessio-recus-diaz',
  templateUrl: './inicia-sessio-recus-diaz.component.html',
  styleUrls: ['./inicia-sessio-recus-diaz.component.css']
})
export class IniciaSessioRecusDiazComponent implements OnInit {
  jugador: any;
  punts: number = 0 ;

  constructor() { }

  ngOnInit(): void {
  }

  guardarDades(){

console.log(this.jugador)

    localStorage.setItem('Jugador', this.jugador);
    localStorage.setItem('Punts inicials', parseInt(this.punts.toString(), 10).toString());
  }
}
