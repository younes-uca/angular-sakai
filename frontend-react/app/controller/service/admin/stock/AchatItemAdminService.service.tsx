import { ADMIN_URL } from 'layout/AppConfig';
import AbstractService from "app/zynerator/service/AbstractService";

import {AchatItemDto} from 'app/controller/model/stock/AchatItem.model';
import {AchatItemCriteria} from 'app/controller/criteria/stock/AchatItemCriteria.model';

export class AchatItemAdminService extends AbstractService<AchatItemDto, AchatItemCriteria>{

    constructor() {
        super(ADMIN_URL , 'achatItem/');
    }

};