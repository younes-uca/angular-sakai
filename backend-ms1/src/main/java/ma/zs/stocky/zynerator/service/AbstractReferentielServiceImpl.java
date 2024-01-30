package ma.zs.stocky.zynerator.service;

import ma.zs.stocky.zynerator.audit.AuditBusinessObjectEnhanced;
import ma.zs.stocky.zynerator.criteria.BaseCriteria;
import ma.zs.stocky.zynerator.repository.AbstractRepository;

public abstract class AbstractReferentielServiceImpl<T extends AuditBusinessObjectEnhanced, CRITERIA extends BaseCriteria, REPO extends AbstractRepository<T, Long>> extends AbstractServiceImpl<T, CRITERIA, REPO> {

    public AbstractReferentielServiceImpl(REPO dao) {
        super(dao);
    }

}
