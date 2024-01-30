package ma.zs.stocky.service.impl.admin.commun;


import ma.zs.stocky.bean.core.commun.Client;
import ma.zs.stocky.dao.criteria.core.commun.ClientCriteria;
import ma.zs.stocky.dao.facade.core.commun.ClientDao;
import ma.zs.stocky.dao.specification.core.commun.ClientSpecification;
import ma.zs.stocky.service.facade.admin.commun.ClientAdminService;
import ma.zs.stocky.zynerator.service.AbstractServiceImpl;
import ma.zs.stocky.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class ClientAdminServiceImpl extends AbstractServiceImpl<Client, ClientCriteria, ClientDao> implements ClientAdminService {





    public Client findByReferenceEntity(Client t){
        return  dao.findByCin(t.getCin());
    }


    public List<Client> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(Client.class, ClientSpecification.class);
    }



    public ClientAdminServiceImpl(ClientDao dao) {
        super(dao);
    }

}
