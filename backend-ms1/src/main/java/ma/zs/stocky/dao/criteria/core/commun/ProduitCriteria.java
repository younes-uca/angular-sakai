package  ma.zs.stocky.dao.criteria.core.commun;



import ma.zs.stocky.zynerator.criteria.BaseCriteria;
import java.util.List;

public class ProduitCriteria extends  BaseCriteria  {

    private String reference;
    private String referenceLike;
    private String libelle;
    private String libelleLike;
    private String barcode;
    private String barcodeLike;
    private String discription;
    private String discriptionLike;
    private String prixAchatMoyen;
    private String prixAchatMoyenMin;
    private String prixAchatMoyenMax;
    private String quantite;
    private String quantiteMin;
    private String quantiteMax;
    private String seuilAlert;
    private String seuilAlertMin;
    private String seuilAlertMax;



    public ProduitCriteria(){}

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

    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }
    public String getLibelleLike(){
        return this.libelleLike;
    }
    public void setLibelleLike(String libelleLike){
        this.libelleLike = libelleLike;
    }

    public String getBarcode(){
        return this.barcode;
    }
    public void setBarcode(String barcode){
        this.barcode = barcode;
    }
    public String getBarcodeLike(){
        return this.barcodeLike;
    }
    public void setBarcodeLike(String barcodeLike){
        this.barcodeLike = barcodeLike;
    }

    public String getDiscription(){
        return this.discription;
    }
    public void setDiscription(String discription){
        this.discription = discription;
    }
    public String getDiscriptionLike(){
        return this.discriptionLike;
    }
    public void setDiscriptionLike(String discriptionLike){
        this.discriptionLike = discriptionLike;
    }

    public String getPrixAchatMoyen(){
        return this.prixAchatMoyen;
    }
    public void setPrixAchatMoyen(String prixAchatMoyen){
        this.prixAchatMoyen = prixAchatMoyen;
    }   
    public String getPrixAchatMoyenMin(){
        return this.prixAchatMoyenMin;
    }
    public void setPrixAchatMoyenMin(String prixAchatMoyenMin){
        this.prixAchatMoyenMin = prixAchatMoyenMin;
    }
    public String getPrixAchatMoyenMax(){
        return this.prixAchatMoyenMax;
    }
    public void setPrixAchatMoyenMax(String prixAchatMoyenMax){
        this.prixAchatMoyenMax = prixAchatMoyenMax;
    }
      
    public String getQuantite(){
        return this.quantite;
    }
    public void setQuantite(String quantite){
        this.quantite = quantite;
    }   
    public String getQuantiteMin(){
        return this.quantiteMin;
    }
    public void setQuantiteMin(String quantiteMin){
        this.quantiteMin = quantiteMin;
    }
    public String getQuantiteMax(){
        return this.quantiteMax;
    }
    public void setQuantiteMax(String quantiteMax){
        this.quantiteMax = quantiteMax;
    }
      
    public String getSeuilAlert(){
        return this.seuilAlert;
    }
    public void setSeuilAlert(String seuilAlert){
        this.seuilAlert = seuilAlert;
    }   
    public String getSeuilAlertMin(){
        return this.seuilAlertMin;
    }
    public void setSeuilAlertMin(String seuilAlertMin){
        this.seuilAlertMin = seuilAlertMin;
    }
    public String getSeuilAlertMax(){
        return this.seuilAlertMax;
    }
    public void setSeuilAlertMax(String seuilAlertMax){
        this.seuilAlertMax = seuilAlertMax;
    }
      

}
