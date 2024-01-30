import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ProduitAdminService} from 'src/app/controller/service/admin/commun/ProduitAdmin.service';
import {ProduitDto} from 'src/app/controller/model/commun/Produit.model';
import {ProduitCriteria} from 'src/app/controller/criteria/commun/ProduitCriteria.model';
@Component({
  selector: 'app-produit-create-admin',
  templateUrl: './produit-create-admin.component.html'
})
export class ProduitCreateAdminComponent extends AbstractCreateController<ProduitDto, ProduitCriteria, ProduitAdminService>  implements OnInit {



   private _validProduitReference = true;

    constructor( private produitService: ProduitAdminService ) {
        super(produitService);
    }

    ngOnInit(): void {
    }





    public setValidation(value: boolean){
        this.validProduitReference = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProduitReference();
    }

    public validateProduitReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validProduitReference = false;
        } else {
            this.validProduitReference = true;
        }
    }






    get validProduitReference(): boolean {
        return this._validProduitReference;
    }

    set validProduitReference(value: boolean) {
         this._validProduitReference = value;
    }



}
