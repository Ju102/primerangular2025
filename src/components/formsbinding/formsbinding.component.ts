import { Component } from "@angular/core";

@Component({
    selector: "forms-binding",
    standalone: false,
    templateUrl: "./formsbinding.component.html"
})

export class FormsBinding {
    public user: any;
    public mensaje: string;
    constructor() {
        this.mensaje = "";
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        };
    }

    recibirDatos(): void {
        this.mensaje = "Datos recibidos";
    }
}