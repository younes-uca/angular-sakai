import {BaseCriteria} from 'app/zynerator/criteria/BaseCriteria.model';


export class ClientCriteria  extends  BaseCriteria {

    public id: number | null;;

    public cin: string;
    public cinLike: string;
    public nom: string;
    public nomLike: string;
    public tel: string;
    public telLike: string;
    public email: string;
    public emailLike: string;
    public adresse: string;
    public adresseLike: string;
    public description: string;
    public descriptionLike: string;
     public creance: null | number;
     public creanceMin: null | number;
     public creanceMax: null | number;


    constructor() {
        super();
        this.id=null;
        this.cin = '';
        this.cinLike = '';
        this.nom = '';
        this.nomLike = '';
        this.tel = '';
        this.telLike = '';
        this.email = '';
        this.emailLike = '';
        this.adresse = '';
        this.adresseLike = '';
        this.description = '';
        this.descriptionLike = '';
        this.creance = null;
        this.creanceMin = null;
        this.creanceMax = null;
    }

}
