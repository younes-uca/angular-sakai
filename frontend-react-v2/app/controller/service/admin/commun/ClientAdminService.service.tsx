import { ADMIN_URL } from 'layout/AppConfig';
import AbstractService from "app/zynerator/service/AbstractService";

import {ClientDto} from 'app/controller/model/commun/Client.model';
import {ClientCriteria} from 'app/controller/criteria/commun/ClientCriteria.model';

export class ClientAdminService extends AbstractService<ClientDto, ClientCriteria>{

    constructor() {
        super(ADMIN_URL , 'client/');
    }

};