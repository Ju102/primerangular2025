import { Component } from "@angular/core";

@Component({
    selector: "deportesv2-component",
    standalone: false,
    templateUrl: "./deportesv2.component.html",
    styleUrls: ["./deportesv2.component.css"]
})

export class Deportesv2Component {
    public sports: Array<string>;
    public numeros: Array<number>;

    constructor() {
        this.sports = ["Fútbol", "Baloncesto", "Tenis", "Rugby"];
        this.numeros = [1, 2, 5, 6, 8, 9];
    }
}