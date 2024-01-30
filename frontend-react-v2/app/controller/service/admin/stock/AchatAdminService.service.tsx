import { ADMIN_URL } from 'layout/AppConfig';
import AbstractService from "app/zynerator/service/AbstractService";

import {AchatDto} from 'app/controller/model/stock/Achat.model';
import {AchatCriteria} from 'app/controller/criteria/stock/AchatCriteria.model';

export class AchatAdminService extends AbstractService<AchatDto, AchatCriteria>{

    constructor() {
        super(ADMIN_URL , 'achat/');
    }

};