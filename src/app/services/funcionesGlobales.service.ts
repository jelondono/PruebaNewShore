import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs/index';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import Swal, { SweetAlertType } from 'sweetalert2';

@Injectable()
export class FuncionesGlobalesService {

    sweetAlert: any;
    codigoExito: number = 200;
    codigoError: number = 400;
    codigoWarning: number = 20;
    codigoInfo: number = 21;
    codigoQuestion: number = 22;

    constructor(private http: HttpClient) {
    }

    cerrarAlertPeticion() {
        Swal.close();
    }

    mostrarMensajeErrorConsola(response) {
        console.log(response);
    }

    /* Metodo para capturar fecha y hora exacta del registro */
     formatDate() {
        var d = new Date();
        d = new Date(d.getTime());
        let fechaActual = d.getFullYear().toString() + "-" + ((d.getMonth() + 1).toString().length == 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "-"
            + (d.getDate().toString().length == 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + " "
            + (d.getHours().toString().length == 2 ? d.getHours().toString() : "0" + d.getHours().toString()) + ":"
            + (((d.getMinutes() / 5) * 5).toString().length == 2 ? ((d.getMinutes() / 5) * 5).toString() : "0" + ((d.getMinutes() / 5) * 5).toString()) + ":00";
        return fechaActual
    }




    mostrarMensajePeticion(tipoMensaje: number, titulo: string, mensaje: string, estadoPeticion: number, callback) {
        titulo = (!isNullOrUndefined(titulo)) ? titulo : 'Procesando Petición';
        mensaje = (!isNullOrUndefined(mensaje)) ? mensaje : 'Por favor espere...';
        tipoMensaje = (!isNullOrUndefined(tipoMensaje)) ? tipoMensaje : 1;
        callback = (!isNullOrUndefined(callback)) ? callback : () => { };
        let estado: SweetAlertType;
        switch (estadoPeticion) {
            case this.codigoExito:
                estado = 'success';
                break;
            case this.codigoError:
            case 404:
            case 409:
                estado = 'error';
                break;
            case this.codigoWarning:
                estado = 'warning';
                break;
            case this.codigoInfo:
                estado = 'info';
                break;
            case this.codigoQuestion:
                estado = 'question';
                break;
            default:
                estado = 'error';
                break;
        }

        if (tipoMensaje == 1) {
            Swal.fire(titulo, mensaje, estado).then((result) => { callback(); });
        } else if (tipoMensaje == 2) {
            Swal.fire({
                title: 'Agregar member',
                showConfirmButton: false,
                allowOutsideClick: false,
                text: 'Se esta guardando un member',
                imageUrl: './assets/loading.gif',
                imageWidth: 80,
                imageHeight: 80,
                imageAlt: 'Cargando...',
                animation: false
            });
        }

    }







    delay(ms: number) {


        this.mostrarMensajePeticion(2, null, null, null, null);
        return new Promise(resolve => setTimeout(resolve, ms));
        this.cerrarAlertPeticion
    }

}



