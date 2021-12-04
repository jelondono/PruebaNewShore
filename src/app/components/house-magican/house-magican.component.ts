import { MagicanService } from '../../services/magican-services/magican.service';
import { Component, OnInit, HostBinding } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

import { DatePipe } from "@angular/common";
import { isNullOrUndefined } from "util";
import { FuncionesGlobalesService } from "src/app/services/funcionesGlobales.service";

@Component({
  selector: "house-magican",
  templateUrl: "house-magican.component.html",
  styleUrls: ["./house-magican.component.scss"],

})
export class HouseMagicanComponent implements OnInit {
  @HostBinding("class") classes = "row";

  houseList: any = [];
  houseListTemp: any = [];
  membersList: any;
  membersListTemp: any;
  informacionCompletaTemp: any = [];
  submitted = false;
  modalViewMember;
  filtroHouse;
  filtroMembers;
  p = 1;
  l = 1;
  miembrosHouseTemp;

  constructor(
    private magicanService: MagicanService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {
    this.getHouses();
  }

  /* INICIO METODOS CRUD */

  /* Consulta de casas */
  getHouses() {
    this.magicanService.getHouses().subscribe(
      (res) => {
        debugger;
        this.informacionCompletaTemp = res;
        /* Se separan las casas de  miembros */
        const listadoCasasTemp = [];
        this.informacionCompletaTemp.forEach((elemento) => {
          if (
            !listadoCasasTemp.includes(elemento.house) &&
            elemento.house != ""
          ) {
            listadoCasasTemp.push(elemento.house);
          }
        });

        /* Consulta de miembros por casa */
        listadoCasasTemp.forEach((nameHouse) => {
          this.magicanService
            .getNumberOfMembersHouse(nameHouse)
            .subscribe((miembrosHouse) => {
              this.miembrosHouseTemp = miembrosHouse;
              /* Conteo de miembros por casa*/
              let conteoEstudiantes = this.miembrosHouseTemp.length;
              /* Fin Conteo */

              /* Push de miembros a sus respectivas casas */
              listadoCasasTemp.map((elemento, index) => {
                if (elemento === nameHouse) {
                  let membersJsonTemp = {
                    nameHouse: elemento,
                    countMember: conteoEstudiantes,
                  };
                  listadoCasasTemp[index] = membersJsonTemp;
                  /* push */
                }
              });
            });
        });

        this.houseList = listadoCasasTemp;
        this.houseListTemp = listadoCasasTemp;
      },
      (err) => console.error(err)
    );
  }

  /* FIN METODOS  */

  /* INICIO METODOS FUNCIONALES  */

  cerrarModalGuardar() {
    this.modalViewMember.close();
  }

  /* Instancia para crear modal */
  async openModalViewMember(viewMember, nameHouse) {
    this.magicanService
      .getNumberOfMembersHouse(nameHouse)
      .subscribe((miembrosHouse) => {
        this.membersList = miembrosHouse;
        this.membersListTemp = miembrosHouse;

        this.modalViewMember = this.modalService.open(viewMember, {
          windowClass: "globalWrapperModal",
          backdrop: "static",
          size: "lg",
          keyboard: false,
        });
      });
  }

  /* Filtro por casas */

  filtrarHouses(event) {
    this.houseList = this.houseListTemp;
    let filtro = event.target.value.toLowerCase();

    if (!isNullOrUndefined(filtro) && filtro != "") {
      this.houseList = this.houseListTemp.filter((itemHouse) => {
        let nameHouse: string = itemHouse.nameHouse.toLowerCase();
        let countMember: string = itemHouse.countMember
          .toString()
          .toLowerCase();

        let resultadoFiltroNameHouse = !isNullOrUndefined(nameHouse)
          ? nameHouse.indexOf(filtro)
          : -1;
        let resultadoFiltroCountMember = !isNullOrUndefined(countMember)
          ? countMember.indexOf(filtro)
          : -1;

        return (
          resultadoFiltroNameHouse != -1 || resultadoFiltroCountMember != -1
        );
      });
    }
  }

  /* Filtro miembros */
  filtrarMembers(event) {
    this.membersList = this.membersListTemp;
    let filtro = event.target.value.toLowerCase();

    if (!isNullOrUndefined(filtro) && filtro != "") {
      this.membersList = this.membersListTemp.filter((itemHouse) => {
        let nameMember: string = itemHouse.name.toLowerCase();
        let speciesMember: string = itemHouse.species.toLowerCase();
        let genderMember: string = itemHouse.gender.toLowerCase();

        let resultadoFiltroNameHouse = !isNullOrUndefined(nameMember)
          ? nameMember.indexOf(filtro)
          : -1;

        let resultadoFiltroSpeciesMember = !isNullOrUndefined(speciesMember)
          ? speciesMember.indexOf(filtro)
          : -1;
        let resultadoFiltroGenderMember = !isNullOrUndefined(genderMember)
          ? genderMember.indexOf(filtro)
          : -1;

        return (
          resultadoFiltroNameHouse != -1 ||
          resultadoFiltroSpeciesMember != -1 ||
          resultadoFiltroGenderMember != -1
        );
      });
    }
  }
}
