import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector: "hooks-angular",
    standalone: false,
    templateUrl: "./hooksangular.component.html",
    styleUrls: ["./hooksangular.component.css"]
})

export class HooksAngular implements OnInit {

    public mensaje: string;

    constructor() {
        this.mensaje = "Hoy es miércoles";
        console.log("Constructor: primer método de inicio de component.");
    }

    cambiarMensaje(): void {
        this.mensaje = "Pero mañana es jueves";
    }

    ngOnInit(): void {
        console.log("OnInit: después del constructor.");
    }

    ngDoCheck(): void {
        console.log("DoCheck: se ejecuta cuando cambia algo en el render.");
    }

}