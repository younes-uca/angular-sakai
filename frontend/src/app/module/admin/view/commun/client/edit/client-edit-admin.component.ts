import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ClientAdminService} from 'src/app/controller/service/admin/commun/ClientAdmin.service';
import {ClientDto} from 'src/app/controller/model/commun/Client.model';
import {ClientCriteria} from 'src/app/controller/criteria/commun/ClientCriteria.model';



@Component({
  selector: 'app-client-edit-admin',
  templateUrl: './client-edit-admin.component.html'
})
export class ClientEditAdminComponent extends AbstractEditController<ClientDto, ClientCriteria, ClientAdminService>   implements OnInit {


    private _validClientCin = true;
    private _validClientNom = true;




    constructor( private clientService: ClientAdminService ) {
        super(clientService);
    }

    ngOnInit(): void {
    }


    public setValidation(value: boolean){
        this.validClientCin = value;
        this.validClientNom = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateClientCin();
        this.validateClientNom();
    }
    public validateClientCin(){
        if (this.stringUtilService.isEmpty(this.item.cin)) {
            this.errorMessages.push('Cin non valide');
            this.validClientCin = false;
        } else {
            this.validClientCin = true;
        }
    }
    public validateClientNom(){
        if (this.stringUtilService.isEmpty(this.item.nom)) {
            this.errorMessages.push('Nom non valide');
            this.validClientNom = false;
        } else {
            this.validClientNom = true;
        }
    }






    get validClientCin(): boolean {
        return this._validClientCin;
    }
    set validClientCin(value: boolean) {
        this._validClientCin = value;
    }
    get validClientNom(): boolean {
        return this._validClientNom;
    }
    set validClientNom(value: boolean) {
        this._validClientNom = value;
    }

}
