package ma.zs.stocky.service.facade.admin.stock;

import java.util.List;
import ma.zs.stocky.bean.core.stock.AchatItem;
import ma.zs.stocky.dao.criteria.core.stock.AchatItemCriteria;
import ma.zs.stocky.zynerator.service.IService;



public interface AchatItemAdminService extends  IService<AchatItem,AchatItemCriteria>  {

    List<AchatItem> findByAchatId(Long id);
    int deleteByAchatId(Long id);
    long countByAchatReference(String reference);



}
