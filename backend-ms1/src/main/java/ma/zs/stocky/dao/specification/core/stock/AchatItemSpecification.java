package  ma.zs.stocky.dao.specification.core.stock;

import ma.zs.stocky.dao.criteria.core.stock.AchatItemCriteria;
import ma.zs.stocky.bean.core.stock.AchatItem;
import ma.zs.stocky.zynerator.specification.AbstractSpecification;


public class AchatItemSpecification extends  AbstractSpecification<AchatItemCriteria, AchatItem>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateBigDecimal("prixUnitaire", criteria.getPrixUnitaire(), criteria.getPrixUnitaireMin(), criteria.getPrixUnitaireMax());
        addPredicateBigDecimal("prixVente", criteria.getPrixVente(), criteria.getPrixVenteMin(), criteria.getPrixVenteMax());
        addPredicateBigDecimal("quantite", criteria.getQuantite(), criteria.getQuantiteMin(), criteria.getQuantiteMax());
        addPredicateBigDecimal("quantiteAvoir", criteria.getQuantiteAvoir(), criteria.getQuantiteAvoirMin(), criteria.getQuantiteAvoirMax());
        addPredicateBigDecimal("remise", criteria.getRemise(), criteria.getRemiseMin(), criteria.getRemiseMax());
        addPredicateFk("produit","id", criteria.getProduit()==null?null:criteria.getProduit().getId());
        addPredicateFk("produit","id", criteria.getProduits());
        addPredicateFk("produit","reference", criteria.getProduit()==null?null:criteria.getProduit().getReference());
        addPredicateFk("achat","id", criteria.getAchat()==null?null:criteria.getAchat().getId());
        addPredicateFk("achat","id", criteria.getAchats());
        addPredicateFk("achat","reference", criteria.getAchat()==null?null:criteria.getAchat().getReference());
    }

    public AchatItemSpecification(AchatItemCriteria criteria) {
        super(criteria);
    }

    public AchatItemSpecification(AchatItemCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
