package  ma.zs.stocky.dao.specification.core.commun;

import ma.zs.stocky.dao.criteria.core.commun.ClientCriteria;
import ma.zs.stocky.bean.core.commun.Client;
import ma.zs.stocky.zynerator.specification.AbstractSpecification;


public class ClientSpecification extends  AbstractSpecification<ClientCriteria, Client>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("cin", criteria.getCin(),criteria.getCinLike());
        addPredicate("nom", criteria.getNom(),criteria.getNomLike());
        addPredicate("tel", criteria.getTel(),criteria.getTelLike());
        addPredicate("email", criteria.getEmail(),criteria.getEmailLike());
        addPredicate("adresse", criteria.getAdresse(),criteria.getAdresseLike());
        addPredicateBigDecimal("creance", criteria.getCreance(), criteria.getCreanceMin(), criteria.getCreanceMax());
    }

    public ClientSpecification(ClientCriteria criteria) {
        super(criteria);
    }

    public ClientSpecification(ClientCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
