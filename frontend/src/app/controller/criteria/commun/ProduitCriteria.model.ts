import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ProduitCriteria  extends BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public libelle: string;
    public libelleLike: string;
    public barcode: string;
    public barcodeLike: string;
    public discription: string;
    public discriptionLike: string;
     public prixAchatMoyen: number;
     public prixAchatMoyenMin: number;
     public prixAchatMoyenMax: number;
     public quantite: number;
     public quantiteMin: number;
     public quantiteMax: number;
     public seuilAlert: number;
     public seuilAlertMin: number;
     public seuilAlertMax: number;

}
