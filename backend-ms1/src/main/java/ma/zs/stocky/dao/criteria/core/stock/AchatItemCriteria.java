package  ma.zs.stocky.dao.criteria.core.stock;


import ma.zs.stocky.dao.criteria.core.commun.ProduitCriteria;

import ma.zs.stocky.zynerator.criteria.BaseCriteria;
import java.util.List;

public class AchatItemCriteria extends  BaseCriteria  {

    private String prixUnitaire;
    private String prixUnitaireMin;
    private String prixUnitaireMax;
    private String prixVente;
    private String prixVenteMin;
    private String prixVenteMax;
    private String quantite;
    private String quantiteMin;
    private String quantiteMax;
    private String quantiteAvoir;
    private String quantiteAvoirMin;
    private String quantiteAvoirMax;
    private String remise;
    private String remiseMin;
    private String remiseMax;

    private ProduitCriteria produit ;
    private List<ProduitCriteria> produits ;
    private AchatCriteria achat ;
    private List<AchatCriteria> achats ;


    public AchatItemCriteria(){}

    public String getPrixUnitaire(){
        return this.prixUnitaire;
    }
    public void setPrixUnitaire(String prixUnitaire){
        this.prixUnitaire = prixUnitaire;
    }   
    public String getPrixUnitaireMin(){
        return this.prixUnitaireMin;
    }
    public void setPrixUnitaireMin(String prixUnitaireMin){
        this.prixUnitaireMin = prixUnitaireMin;
    }
    public String getPrixUnitaireMax(){
        return this.prixUnitaireMax;
    }
    public void setPrixUnitaireMax(String prixUnitaireMax){
        this.prixUnitaireMax = prixUnitaireMax;
    }
      
    public String getPrixVente(){
        return this.prixVente;
    }
    public void setPrixVente(String prixVente){
        this.prixVente = prixVente;
    }   
    public String getPrixVenteMin(){
        return this.prixVenteMin;
    }
    public void setPrixVenteMin(String prixVenteMin){
        this.prixVenteMin = prixVenteMin;
    }
    public String getPrixVenteMax(){
        return this.prixVenteMax;
    }
    public void setPrixVenteMax(String prixVenteMax){
        this.prixVenteMax = prixVenteMax;
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
      
    public String getQuantiteAvoir(){
        return this.quantiteAvoir;
    }
    public void setQuantiteAvoir(String quantiteAvoir){
        this.quantiteAvoir = quantiteAvoir;
    }   
    public String getQuantiteAvoirMin(){
        return this.quantiteAvoirMin;
    }
    public void setQuantiteAvoirMin(String quantiteAvoirMin){
        this.quantiteAvoirMin = quantiteAvoirMin;
    }
    public String getQuantiteAvoirMax(){
        return this.quantiteAvoirMax;
    }
    public void setQuantiteAvoirMax(String quantiteAvoirMax){
        this.quantiteAvoirMax = quantiteAvoirMax;
    }
      
    public String getRemise(){
        return this.remise;
    }
    public void setRemise(String remise){
        this.remise = remise;
    }   
    public String getRemiseMin(){
        return this.remiseMin;
    }
    public void setRemiseMin(String remiseMin){
        this.remiseMin = remiseMin;
    }
    public String getRemiseMax(){
        return this.remiseMax;
    }
    public void setRemiseMax(String remiseMax){
        this.remiseMax = remiseMax;
    }
      

    public ProduitCriteria getProduit(){
        return this.produit;
    }

    public void setProduit(ProduitCriteria produit){
        this.produit = produit;
    }
    public List<ProduitCriteria> getProduits(){
        return this.produits;
    }

    public void setProduits(List<ProduitCriteria> produits){
        this.produits = produits;
    }
    public AchatCriteria getAchat(){
        return this.achat;
    }

    public void setAchat(AchatCriteria achat){
        this.achat = achat;
    }
    public List<AchatCriteria> getAchats(){
        return this.achats;
    }

    public void setAchats(List<AchatCriteria> achats){
        this.achats = achats;
    }
}
