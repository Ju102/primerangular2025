import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "sumar-numeros",
    standalone: false,
    templateUrl: "./sumarnumeros.component.html",
})

export class SumarNumeros {
    @ViewChild("cajanumero1") cajaNumero1Ref!: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2Ref!: ElementRef;

    public suma: number;

    constructor() {
        this.suma = 0;
        // En Angular, aunque sean referencias, todas las variables deben ser instanciadas
        // (en este caso, si se añade ! no es necesario, aunque recomendable)
        this.cajaNumero1Ref = new ElementRef(0);
        this.cajaNumero2Ref = new ElementRef(0);
    }

    sumarNumeros(): void {
        let num1 = parseInt(this.cajaNumero1Ref.nativeElement.value);
        let num2 = parseInt(this.cajaNumero2Ref.nativeElement.value);

        this.suma = num1 + num2;
    }
}