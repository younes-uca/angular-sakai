import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AchatDto} from './Achat.model';
import {ProduitDto} from '../commun/Produit.model';

export class AchatItemDto extends BaseDto{

    public prixUnitaire: null | number;

    public prixVente: null | number;

    public quantite: null | number;

    public quantiteAvoir: null | number;

    public remise: null | number;

    public produit: ProduitDto ;
    public achat: AchatDto ;
    

    constructor() {
        super();

        this.prixUnitaire = null;
        this.prixVente = null;
        this.quantite = null;
        this.quantiteAvoir = null;
        this.remise = null;
        this.achat = new AchatDto() ;

        }

}
