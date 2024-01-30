package  ma.zs.stocky.dao.criteria.core.stock;


import ma.zs.stocky.dao.criteria.core.commun.ClientCriteria;

import ma.zs.stocky.zynerator.criteria.BaseCriteria;
import java.util.List;
import java.time.LocalDateTime;
import java.time.LocalDate;

public class AchatCriteria extends  BaseCriteria  {

    private String reference;
    private String referenceLike;
    private LocalDateTime dateAchat;
    private LocalDateTime dateAchatFrom;
    private LocalDateTime dateAchatTo;
    private String total;
    private String totalMin;
    private String totalMax;
    private String totalPaye;
    private String totalPayeMin;
    private String totalPayeMax;
    private String description;
    private String descriptionLike;

    private ClientCriteria client ;
    private List<ClientCriteria> clients ;


    public AchatCriteria(){}

    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }
    public String getReferenceLike(){
        return this.referenceLike;
    }
    public void setReferenceLike(String referenceLike){
        this.referenceLike = referenceLike;
    }

    public LocalDateTime getDateAchat(){
        return this.dateAchat;
    }
    public void setDateAchat(LocalDateTime dateAchat){
        this.dateAchat = dateAchat;
    }
    public LocalDateTime getDateAchatFrom(){
        return this.dateAchatFrom;
    }
    public void setDateAchatFrom(LocalDateTime dateAchatFrom){
        this.dateAchatFrom = dateAchatFrom;
    }
    public LocalDateTime getDateAchatTo(){
        return this.dateAchatTo;
    }
    public void setDateAchatTo(LocalDateTime dateAchatTo){
        this.dateAchatTo = dateAchatTo;
    }
    public String getTotal(){
        return this.total;
    }
    public void setTotal(String total){
        this.total = total;
    }   
    public String getTotalMin(){
        return this.totalMin;
    }
    public void setTotalMin(String totalMin){
        this.totalMin = totalMin;
    }
    public String getTotalMax(){
        return this.totalMax;
    }
    public void setTotalMax(String totalMax){
        this.totalMax = totalMax;
    }
      
    public String getTotalPaye(){
        return this.totalPaye;
    }
    public void setTotalPaye(String totalPaye){
        this.totalPaye = totalPaye;
    }   
    public String getTotalPayeMin(){
        return this.totalPayeMin;
    }
    public void setTotalPayeMin(String totalPayeMin){
        this.totalPayeMin = totalPayeMin;
    }
    public String getTotalPayeMax(){
        return this.totalPayeMax;
    }
    public void setTotalPayeMax(String totalPayeMax){
        this.totalPayeMax = totalPayeMax;
    }
      
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public String getDescriptionLike(){
        return this.descriptionLike;
    }
    public void setDescriptionLike(String descriptionLike){
        this.descriptionLike = descriptionLike;
    }


    public ClientCriteria getClient(){
        return this.client;
    }

    public void setClient(ClientCriteria client){
        this.client = client;
    }
    public List<ClientCriteria> getClients(){
        return this.clients;
    }

    public void setClients(List<ClientCriteria> clients){
        this.clients = clients;
    }
}
