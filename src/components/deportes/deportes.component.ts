import { Component } from "@angular/core";

@Component({
    selector: "deportes-component",
    templateUrl: "./deportes.component.html",
    styleUrls: ["./deportes.component.css"],
    standalone: false
})

export class DeportesComponent {
    public sports: Array<string>;
    public numeros: Array<number>;

    constructor() {
        this.sports = ["Fútbol", "Baloncesto", "Tenis", "Rugby"];
        this.numeros = [1, 2, 5, 6, 8, 9];
    }
}