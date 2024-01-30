import {BaseCriteria} from 'app/zynerator/criteria/BaseCriteria.model';


export class ProduitCriteria  extends  BaseCriteria {

    public id: number | null;;

    public reference: string;
    public referenceLike: string;
    public libelle: string;
    public libelleLike: string;
    public barcode: string;
    public barcodeLike: string;
    public discription: string;
    public discriptionLike: string;
     public prixAchatMoyen: null | number;
     public prixAchatMoyenMin: null | number;
     public prixAchatMoyenMax: null | number;
     public quantite: null | number;
     public quantiteMin: null | number;
     public quantiteMax: null | number;
     public seuilAlert: null | number;
     public seuilAlertMin: null | number;
     public seuilAlertMax: null | number;


    constructor() {
        super();
        this.id=null;
        this.reference = '';
        this.referenceLike = '';
        this.libelle = '';
        this.libelleLike = '';
        this.barcode = '';
        this.barcodeLike = '';
        this.discription = '';
        this.discriptionLike = '';
        this.prixAchatMoyen = null;
        this.prixAchatMoyenMin = null;
        this.prixAchatMoyenMax = null;
        this.quantite = null;
        this.quantiteMin = null;
        this.quantiteMax = null;
        this.seuilAlert = null;
        this.seuilAlertMin = null;
        this.seuilAlertMax = null;
    }

}
