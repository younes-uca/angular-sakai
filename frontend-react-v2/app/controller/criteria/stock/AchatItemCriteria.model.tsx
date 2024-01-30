import {BaseCriteria} from 'app/zynerator/criteria/BaseCriteria.model';

import {ProduitCriteria} from 'app/controller/criteria/commun/ProduitCriteria.model';
import {AchatCriteria} from 'app/controller/criteria/stock/AchatCriteria.model';

export class AchatItemCriteria  extends  BaseCriteria {

    public id: number | null;;

     public prixUnitaire: null | number;
     public prixUnitaireMin: null | number;
     public prixUnitaireMax: null | number;
     public prixVente: null | number;
     public prixVenteMin: null | number;
     public prixVenteMax: null | number;
     public quantite: null | number;
     public quantiteMin: null | number;
     public quantiteMax: null | number;
     public quantiteAvoir: null | number;
     public quantiteAvoirMin: null | number;
     public quantiteAvoirMax: null | number;
     public remise: null | number;
     public remiseMin: null | number;
     public remiseMax: null | number;
  public achat: AchatCriteria ;
  public achats: Array<AchatCriteria> ;


    constructor() {
        super();
        this.id=null;
        this.prixUnitaire = null;
        this.prixUnitaireMin = null;
        this.prixUnitaireMax = null;
        this.prixVente = null;
        this.prixVenteMin = null;
        this.prixVenteMax = null;
        this.quantite = null;
        this.quantiteMin = null;
        this.quantiteMax = null;
        this.quantiteAvoir = null;
        this.quantiteAvoirMin = null;
        this.quantiteAvoirMax = null;
        this.remise = null;
        this.remiseMin = null;
        this.remiseMax = null;
        this.achat = new AchatCriteria();
        this.achats = new Array<AchatCriteria>() ;
    }

}
