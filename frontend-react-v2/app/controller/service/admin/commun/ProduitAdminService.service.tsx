import { ADMIN_URL } from 'layout/AppConfig';
import AbstractService from "app/zynerator/service/AbstractService";

import {ProduitDto} from 'app/controller/model/commun/Produit.model';
import {ProduitCriteria} from 'app/controller/criteria/commun/ProduitCriteria.model';

export class ProduitAdminService extends AbstractService<ProduitDto, ProduitCriteria>{

    constructor() {
        super(ADMIN_URL , 'produit/');
    }

};