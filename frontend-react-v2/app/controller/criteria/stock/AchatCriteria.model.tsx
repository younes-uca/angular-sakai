import {BaseCriteria} from 'app/zynerator/criteria/BaseCriteria.model';

import {ClientCriteria} from 'app/controller/criteria/commun/ClientCriteria.model';

export class AchatCriteria  extends  BaseCriteria {

    public id: number | null;;

    public reference: string;
    public referenceLike: string;
    public dateAchat: null | Date;
    public dateAchatFrom: null | Date;
    public dateAchatTo: null | Date;
     public total: null | number;
     public totalMin: null | number;
     public totalMax: null | number;
     public totalPaye: null | number;
     public totalPayeMin: null | number;
     public totalPayeMax: null | number;
    public description: string;
    public descriptionLike: string;
  public client: ClientCriteria ;
  public clients: Array<ClientCriteria> ;


    constructor() {
        super();
        this.id=null;
        this.reference = '';
        this.referenceLike = '';
        this.dateAchat = null;
        this.dateAchatFrom  = null;
        this.dateAchatTo = null;
        this.total = null;
        this.totalMin = null;
        this.totalMax = null;
        this.totalPaye = null;
        this.totalPayeMin = null;
        this.totalPayeMax = null;
        this.description = '';
        this.descriptionLike = '';
        this.client = new ClientCriteria();
        this.clients = new Array<ClientCriteria>() ;
    }

}
