import {Component, OnInit} from '@angular/core';
import {AchatAdminService} from 'src/app/controller/service/admin/stock/AchatAdmin.service';
import {AchatDto} from 'src/app/controller/model/stock/Achat.model';
import {AchatCriteria} from 'src/app/controller/criteria/stock/AchatCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {AchatItemDto} from 'src/app/controller/model/stock/AchatItem.model';
import {AchatItemAdminService} from 'src/app/controller/service/admin/stock/AchatItemAdmin.service';
import {ClientDto} from 'src/app/controller/model/commun/Client.model';
import {ClientAdminService} from 'src/app/controller/service/admin/commun/ClientAdmin.service';
import {ProduitDto} from 'src/app/controller/model/commun/Produit.model';
import {ProduitAdminService} from 'src/app/controller/service/admin/commun/ProduitAdmin.service';


@Component({
  selector: 'app-achat-list-admin',
  templateUrl: './achat-list-admin.component.html'
})
export class AchatListAdminComponent extends AbstractListController<AchatDto, AchatCriteria, AchatAdminService>  implements OnInit {

    fileName = 'Achat';

    clients: Array<ClientDto>;


    constructor( private achatService: AchatAdminService  , private achatItemService: AchatItemAdminService, private clientService: ClientAdminService, private produitService: ProduitAdminService) {
        super(achatService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadClient();
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'dateAchat', header: 'Date achat'},
            {field: 'total', header: 'Total'},
            {field: 'totalPaye', header: 'Total paye'},
            {field: 'client?.nom', header: 'Client'},
        ];
    }


    public async loadClient(){
       this.clientService.findAllOptimized().subscribe(clients => this.clients = clients, error => console.log(error))
    }

	public initDuplicate(res: AchatDto) {
        if (res.achatItems != null) {
             res.achatItems.forEach(d => { d.achat = null; d.id = null; });
        }
	}


   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Date achat': this.datePipe.transform(e.dateAchat , 'dd/MM/yyyy hh:mm'),
                 'Total': e.total ,
                 'Total paye': e.totalPaye ,
                 'Description': e.description ,
                'Client': e.client?.nom ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Date achat Min': this.criteria.dateAchatFrom ? this.datePipe.transform(this.criteria.dateAchatFrom , this.dateFormat) : environment.emptyForExport ,
            'Date achat Max': this.criteria.dateAchatTo ? this.datePipe.transform(this.criteria.dateAchatTo , this.dateFormat) : environment.emptyForExport ,
            'Total Min': this.criteria.totalMin ? this.criteria.totalMin : environment.emptyForExport ,
            'Total Max': this.criteria.totalMax ? this.criteria.totalMax : environment.emptyForExport ,
            'Total paye Min': this.criteria.totalPayeMin ? this.criteria.totalPayeMin : environment.emptyForExport ,
            'Total paye Max': this.criteria.totalPayeMax ? this.criteria.totalPayeMax : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Client': this.criteria.client?.nom ? this.criteria.client?.nom : environment.emptyForExport ,
        }];
      }
}
