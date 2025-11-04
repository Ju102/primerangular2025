import { Component } from "@angular/core";

// Un component siempre debe tener la declaración de su contenido
@Component({
    // Debemos declarar el nombre del component mediante su selector en HTML. En Angular, los selectores llevan guion
    selector: "primer-component",
    standalone: false,
    // Por ahora, no voy a tener HTML separado, sino incluido dentro del propio component
    /*
    template:
        `
    <h1 style="color: orange">Soy el primer componente</h1>
    <h3 style="color: blue">{{ titulo }}</h3>
    <h3 style="color: green">{{ descripcion }}</h3>
    `
    */
    templateUrl: "./primer.component.html",
    styleUrls: ["./primer.component.css"]

})

// Cada componente siempre debe tener una clase asociada en su TS
// Dicho nombre de clase sí lleva mayúsculas y se declara dentro de app-module.ts
export class PrimerComponent {
    // Aquí se declaran las variables
    // Dichas variables deben tener un tipado siempre (TS)
    public titulo: string;
    public descripcion: string;
    public year: number;

    // En Angular, al igual que en React, tenemos un constructor. En dicho constructor será
    // donde inicializaremos los elementos de la clase.
    constructor() {
        this.titulo = "Primer Angular";
        this.descripcion = "Este es mi primer proyecto de Angular";
        this.year = 2025;
    }
}