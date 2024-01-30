import {Component, OnInit} from '@angular/core';
import {AchatItemAdminService} from 'src/app/controller/service/admin/stock/AchatItemAdmin.service';
import {AchatItemDto} from 'src/app/controller/model/stock/AchatItem.model';
import {AchatItemCriteria} from 'src/app/controller/criteria/stock/AchatItemCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {AchatDto} from 'src/app/controller/model/stock/Achat.model';
import {AchatAdminService} from 'src/app/controller/service/admin/stock/AchatAdmin.service';
import {ProduitDto} from 'src/app/controller/model/commun/Produit.model';
import {ProduitAdminService} from 'src/app/controller/service/admin/commun/ProduitAdmin.service';


@Component({
  selector: 'app-achat-item-list-admin',
  templateUrl: './achat-item-list-admin.component.html'
})
export class AchatItemListAdminComponent extends AbstractListController<AchatItemDto, AchatItemCriteria, AchatItemAdminService>  implements OnInit {

    fileName = 'AchatItem';

    produits: Array<ProduitDto>;
    achats: Array<AchatDto>;


    constructor( private achatItemService: AchatItemAdminService  , private achatService: AchatAdminService, private produitService: ProduitAdminService) {
        super(achatItemService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadProduit();
        this.loadAchat();
    }


    public initCol() {
        this.cols = [
            {field: 'produit?.reference', header: 'Produit'},
            {field: 'prixUnitaire', header: 'Prix unitaire'},
            {field: 'prixVente', header: 'Prix vente'},
            {field: 'quantite', header: 'Quantite'},
            {field: 'quantiteAvoir', header: 'Quantite avoir'},
            {field: 'remise', header: 'Remise'},
            {field: 'achat?.reference', header: 'Achat'},
        ];
    }


    public async loadProduit(){
       this.produitService.findAllOptimized().subscribe(produits => this.produits = produits, error => console.log(error))
    }
    public async loadAchat(){
       this.achatService.findAllOptimized().subscribe(achats => this.achats = achats, error => console.log(error))
    }



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Produit': e.produit?.reference ,
                 'Prix unitaire': e.prixUnitaire ,
                 'Prix vente': e.prixVente ,
                 'Quantite': e.quantite ,
                 'Quantite avoir': e.quantiteAvoir ,
                 'Remise': e.remise ,
                'Achat': e.achat?.reference ,
            }
        });

        this.criteriaData = [{
        //'Produit': this.criteria.produit?.reference ? this.criteria.produit?.reference : environment.emptyForExport ,
            'Prix unitaire Min': this.criteria.prixUnitaireMin ? this.criteria.prixUnitaireMin : environment.emptyForExport ,
            'Prix unitaire Max': this.criteria.prixUnitaireMax ? this.criteria.prixUnitaireMax : environment.emptyForExport ,
            'Prix vente Min': this.criteria.prixVenteMin ? this.criteria.prixVenteMin : environment.emptyForExport ,
            'Prix vente Max': this.criteria.prixVenteMax ? this.criteria.prixVenteMax : environment.emptyForExport ,
            'Quantite Min': this.criteria.quantiteMin ? this.criteria.quantiteMin : environment.emptyForExport ,
            'Quantite Max': this.criteria.quantiteMax ? this.criteria.quantiteMax : environment.emptyForExport ,
            'Quantite avoir Min': this.criteria.quantiteAvoirMin ? this.criteria.quantiteAvoirMin : environment.emptyForExport ,
            'Quantite avoir Max': this.criteria.quantiteAvoirMax ? this.criteria.quantiteAvoirMax : environment.emptyForExport ,
            'Remise Min': this.criteria.remiseMin ? this.criteria.remiseMin : environment.emptyForExport ,
            'Remise Max': this.criteria.remiseMax ? this.criteria.remiseMax : environment.emptyForExport ,
        //'Achat': this.criteria.achat?.reference ? this.criteria.achat?.reference : environment.emptyForExport ,
        }];
      }
}
