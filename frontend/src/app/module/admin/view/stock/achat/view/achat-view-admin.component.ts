import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {AchatAdminService} from 'src/app/controller/service/admin/stock/AchatAdmin.service';
import {AchatDto} from 'src/app/controller/model/stock/Achat.model';
import {AchatCriteria} from 'src/app/controller/criteria/stock/AchatCriteria.model';

import {AchatItemDto} from 'src/app/controller/model/stock/AchatItem.model';
import {AchatItemAdminService} from 'src/app/controller/service/admin/stock/AchatItemAdmin.service';
import {ClientDto} from 'src/app/controller/model/commun/Client.model';
import {ClientAdminService} from 'src/app/controller/service/admin/commun/ClientAdmin.service';
import {ProduitDto} from 'src/app/controller/model/commun/Produit.model';
import {ProduitAdminService} from 'src/app/controller/service/admin/commun/ProduitAdmin.service';
@Component({
  selector: 'app-achat-view-admin',
  templateUrl: './achat-view-admin.component.html'
})
export class AchatViewAdminComponent extends AbstractViewController<AchatDto, AchatCriteria, AchatAdminService> implements OnInit {

    achatItems = new AchatItemDto();
    achatItemss: Array<AchatItemDto> = [];

    constructor(private achatService: AchatAdminService, private achatItemService: AchatItemAdminService, private clientService: ClientAdminService, private produitService: ProduitAdminService){
        super(achatService);
    }

    ngOnInit(): void {
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
    get client(): ClientDto {
       return this.clientService.item;
    }
    set client(value: ClientDto) {
        this.clientService.item = value;
    }
    get clients(): Array<ClientDto> {
       return this.clientService.items;
    }
    set clients(value: Array<ClientDto>) {
        this.clientService.items = value;
    }


}
