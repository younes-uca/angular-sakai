package  ma.zs.stocky.ws.dto.stock;

import ma.zs.stocky.zynerator.audit.Log;
import ma.zs.stocky.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.math.BigDecimal;


import ma.zs.stocky.ws.dto.commun.ProduitDto;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class AchatItemDto  extends AuditBaseDto {

    private BigDecimal prixUnitaire  ;
    private BigDecimal prixVente  ;
    private BigDecimal quantite  ;
    private BigDecimal quantiteAvoir  ;
    private BigDecimal remise  ;

    private ProduitDto produit ;
    private AchatDto achat ;



    public AchatItemDto(){
        super();
    }



    @Log
    public BigDecimal getPrixUnitaire(){
        return this.prixUnitaire;
    }
    public void setPrixUnitaire(BigDecimal prixUnitaire){
        this.prixUnitaire = prixUnitaire;
    }

    @Log
    public BigDecimal getPrixVente(){
        return this.prixVente;
    }
    public void setPrixVente(BigDecimal prixVente){
        this.prixVente = prixVente;
    }

    @Log
    public BigDecimal getQuantite(){
        return this.quantite;
    }
    public void setQuantite(BigDecimal quantite){
        this.quantite = quantite;
    }

    @Log
    public BigDecimal getQuantiteAvoir(){
        return this.quantiteAvoir;
    }
    public void setQuantiteAvoir(BigDecimal quantiteAvoir){
        this.quantiteAvoir = quantiteAvoir;
    }

    @Log
    public BigDecimal getRemise(){
        return this.remise;
    }
    public void setRemise(BigDecimal remise){
        this.remise = remise;
    }


    public ProduitDto getProduit(){
        return this.produit;
    }

    public void setProduit(ProduitDto produit){
        this.produit = produit;
    }
    public AchatDto getAchat(){
        return this.achat;
    }

    public void setAchat(AchatDto achat){
        this.achat = achat;
    }






}
