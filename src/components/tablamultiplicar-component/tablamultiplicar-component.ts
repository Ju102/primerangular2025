import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tabla-multiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar-component.html',
  styleUrl: './tablamultiplicar-component.css',
})
export class TablamultiplicarComponent {
  @ViewChild("cajanumero") cajaNumeroRef: ElementRef;

  public resultados: Array<number>;
  public factor: number;

  constructor() {
    this.resultados = new Array<number>();
    this.cajaNumeroRef = new ElementRef(0);
    this.factor = 0;
  }

  mostrarTabla() {
    this.factor = this.cajaNumeroRef.nativeElement.value;
    let aux = new Array<number>();
    for (let i = 1; i <= 10; i++) {
      aux.push(this.factor * i);
    }
    this.resultados = aux;
  }
}
