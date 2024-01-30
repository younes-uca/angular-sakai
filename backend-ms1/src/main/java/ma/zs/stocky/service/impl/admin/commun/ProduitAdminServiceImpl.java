package ma.zs.stocky.service.impl.admin.commun;


import ma.zs.stocky.bean.core.commun.Produit;
import ma.zs.stocky.dao.criteria.core.commun.ProduitCriteria;
import ma.zs.stocky.dao.facade.core.commun.ProduitDao;
import ma.zs.stocky.dao.specification.core.commun.ProduitSpecification;
import ma.zs.stocky.service.facade.admin.commun.ProduitAdminService;
import ma.zs.stocky.zynerator.service.AbstractServiceImpl;
import ma.zs.stocky.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class ProduitAdminServiceImpl extends AbstractServiceImpl<Produit, ProduitCriteria, ProduitDao> implements ProduitAdminService {





    public Produit findByReferenceEntity(Produit t){
        return  dao.findByReference(t.getReference());
    }


    public List<Produit> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(Produit.class, ProduitSpecification.class);
    }



    public ProduitAdminServiceImpl(ProduitDao dao) {
        super(dao);
    }

}
