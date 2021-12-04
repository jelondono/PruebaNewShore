import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class GeneralInterface {
    titleWindowPlatform?: string;
    namePlatform?: string;
    urlApi?: string;
    urlWebSocket?: string;

    constructor() {
        this.titleWindowPlatform = ': Magician School';
        this.namePlatform = ': Magician School';
        this.urlApi = 'http://hp-api.herokuapp.com/api';

    }

}




