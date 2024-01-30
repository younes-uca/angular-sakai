package  ma.zs.stocky.dao.criteria.core.commun;



import ma.zs.stocky.zynerator.criteria.BaseCriteria;
import java.util.List;

public class ClientCriteria extends  BaseCriteria  {

    private String cin;
    private String cinLike;
    private String nom;
    private String nomLike;
    private String tel;
    private String telLike;
    private String email;
    private String emailLike;
    private String adresse;
    private String adresseLike;
    private String description;
    private String descriptionLike;
    private String creance;
    private String creanceMin;
    private String creanceMax;



    public ClientCriteria(){}

    public String getCin(){
        return this.cin;
    }
    public void setCin(String cin){
        this.cin = cin;
    }
    public String getCinLike(){
        return this.cinLike;
    }
    public void setCinLike(String cinLike){
        this.cinLike = cinLike;
    }

    public String getNom(){
        return this.nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }
    public String getNomLike(){
        return this.nomLike;
    }
    public void setNomLike(String nomLike){
        this.nomLike = nomLike;
    }

    public String getTel(){
        return this.tel;
    }
    public void setTel(String tel){
        this.tel = tel;
    }
    public String getTelLike(){
        return this.telLike;
    }
    public void setTelLike(String telLike){
        this.telLike = telLike;
    }

    public String getEmail(){
        return this.email;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public String getEmailLike(){
        return this.emailLike;
    }
    public void setEmailLike(String emailLike){
        this.emailLike = emailLike;
    }

    public String getAdresse(){
        return this.adresse;
    }
    public void setAdresse(String adresse){
        this.adresse = adresse;
    }
    public String getAdresseLike(){
        return this.adresseLike;
    }
    public void setAdresseLike(String adresseLike){
        this.adresseLike = adresseLike;
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

    public String getCreance(){
        return this.creance;
    }
    public void setCreance(String creance){
        this.creance = creance;
    }   
    public String getCreanceMin(){
        return this.creanceMin;
    }
    public void setCreanceMin(String creanceMin){
        this.creanceMin = creanceMin;
    }
    public String getCreanceMax(){
        return this.creanceMax;
    }
    public void setCreanceMax(String creanceMax){
        this.creanceMax = creanceMax;
    }
      

}
