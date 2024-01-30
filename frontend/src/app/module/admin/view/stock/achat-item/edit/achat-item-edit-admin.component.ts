import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {AchatItemAdminService} from 'src/app/controller/service/admin/stock/AchatItemAdmin.service';
import {AchatItemDto} from 'src/app/controller/model/stock/AchatItem.model';
import {AchatItemCriteria} from 'src/app/controller/criteria/stock/AchatItemCriteria.model';


import {AchatDto} from 'src/app/controller/model/stock/Achat.model';
import {AchatAdminService} from 'src/app/controller/service/admin/stock/AchatAdmin.service';
import {ProduitDto} from 'src/app/controller/model/commun/Produit.model';
import {ProduitAdminService} from 'src/app/controller/service/admin/commun/ProduitAdmin.service';

@Component({
  selector: 'app-achat-item-edit-admin',
  templateUrl: './achat-item-edit-admin.component.html'
})
export class AchatItemEditAdminComponent extends AbstractEditController<AchatItemDto, AchatItemCriteria, AchatItemAdminService>   implements OnInit {


    private _validAchatItemProduit = true;
    private _validAchatItemPrixUnitaire = true;
    private _validAchatItemPrixVente = true;
    private _validAchatItemQuantite = true;

    private _validProduitReference = true;
    private _validAchatReference = true;



    constructor( private achatItemService: AchatItemAdminService , private achatService: AchatAdminService, private produitService: ProduitAdminService) {
        super(achatItemService);
    }

    ngOnInit(): void {
        this.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.achat = new AchatDto();
        this.achatService.findAll().subscribe((data) => this.achats = data);
    }


    public setValidation(value: boolean){
        this.validAchatItemProduit = value;
        this.validAchatItemPrixUnitaire = value;
        this.validAchatItemPrixVente = value;
        this.validAchatItemQuantite = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAchatItemProduit();
        this.validateAchatItemPrixUnitaire();
        this.validateAchatItemPrixVente();
        this.validateAchatItemQuantite();
    }
    public validateAchatItemProduit(){
        if (this.stringUtilService.isEmpty(this.item.produit)) {
            this.errorMessages.push('Produit non valide');
            this.validAchatItemProduit = false;
        } else {
            this.validAchatItemProduit = true;
        }
    }
    public validateAchatItemPrixUnitaire(){
        if (this.stringUtilService.isEmpty(this.item.prixUnitaire)) {
            this.errorMessages.push('Prix unitaire non valide');
            this.validAchatItemPrixUnitaire = false;
        } else {
            this.validAchatItemPrixUnitaire = true;
        }
    }
    public validateAchatItemPrixVente(){
        if (this.stringUtilService.isEmpty(this.item.prixVente)) {
            this.errorMessages.push('Prix vente non valide');
            this.validAchatItemPrixVente = false;
        } else {
            this.validAchatItemPrixVente = true;
        }
    }
    public validateAchatItemQuantite(){
        if (this.stringUtilService.isEmpty(this.item.quantite)) {
            this.errorMessages.push('Quantite non valide');
            this.validAchatItemQuantite = false;
        } else {
            this.validAchatItemQuantite = true;
        }
    }



   public async openCreateAchat(achat: string) {
        const isPermistted = await this.roleService.isPermitted('Achat', 'edit');
        if (isPermistted) {
             this.achat = new AchatDto();
             this.createAchatDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get produit(): ProduitDto {
       return this.produitService.item;
   }
  set produit(value: ProduitDto) {
        this.produitService.item = value;
   }
   get produits(): Array<ProduitDto> {
        return this.produitService.items;
   }
   set produits(value: Array<ProduitDto>) {
        this.produitService.items = value;
   }
   get createProduitDialog(): boolean {
       return this.produitService.createDialog;
   }
  set createProduitDialog(value: boolean) {
       this.produitService.createDialog= value;
   }
   get achat(): AchatDto {
       return this.achatService.item;
   }
  set achat(value: AchatDto) {
        this.achatService.item = value;
   }
   get achats(): Array<AchatDto> {
        return this.achatService.items;
   }
   set achats(value: Array<AchatDto>) {
        this.achatService.items = value;
   }
   get createAchatDialog(): boolean {
       return this.achatService.createDialog;
   }
  set createAchatDialog(value: boolean) {
       this.achatService.createDialog= value;
   }


    get validAchatItemProduit(): boolean {
        return this._validAchatItemProduit;
    }
    set validAchatItemProduit(value: boolean) {
        this._validAchatItemProduit = value;
    }
    get validAchatItemPrixUnitaire(): boolean {
        return this._validAchatItemPrixUnitaire;
    }
    set validAchatItemPrixUnitaire(value: boolean) {
        this._validAchatItemPrixUnitaire = value;
    }
    get validAchatItemPrixVente(): boolean {
        return this._validAchatItemPrixVente;
    }
    set validAchatItemPrixVente(value: boolean) {
        this._validAchatItemPrixVente = value;
    }
    get validAchatItemQuantite(): boolean {
        return this._validAchatItemQuantite;
    }
    set validAchatItemQuantite(value: boolean) {
        this._validAchatItemQuantite = value;
    }

    get validProduitReference(): boolean {
        return this._validProduitReference;
    }
    set validProduitReference(value: boolean) {
        this._validProduitReference = value;
    }
    get validAchatReference(): boolean {
        return this._validAchatReference;
    }
    set validAchatReference(value: boolean) {
        this._validAchatReference = value;
    }
}
