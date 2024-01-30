import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AchatItemDto} from './AchatItem.model';
import {ClientDto} from '../commun/Client.model';

export class AchatDto extends BaseDto{

    public reference: string;

   public dateAchat: Date;

    public total: null | number;

    public totalPaye: null | number;

    public description: string;

    public client: ClientDto ;
     public achatItems: Array<AchatItemDto>;
    

    constructor() {
        super();

        this.reference = '';
        this.dateAchat = null;
        this.total = null;
        this.totalPaye = null;
        this.description = '';
        this.client = new ClientDto() ;
        this.achatItems = new Array<AchatItemDto>();

        }

}
