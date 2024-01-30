package ma.zs.stocky.bean.core.stock;

import java.util.Objects;





import ma.zs.stocky.bean.core.commun.Produit;


import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;


import java.math.BigDecimal;


@Entity
@Table(name = "achat_item")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="achat_item_seq",sequenceName="achat_item_seq",allocationSize=1, initialValue = 1)
public class AchatItem   extends AuditBusinessObject     {

    private Long id;

    private BigDecimal prixUnitaire = BigDecimal.ZERO;
    private BigDecimal prixVente = BigDecimal.ZERO;
    private BigDecimal quantite = BigDecimal.ZERO;
    private BigDecimal quantiteAvoir = BigDecimal.ZERO;
    private BigDecimal remise = BigDecimal.ZERO;

    private Produit produit ;
    private Achat achat ;


    public AchatItem(){
        super();
    }





    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="achat_item_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Produit getProduit(){
        return this.produit;
    }
    public void setProduit(Produit produit){
        this.produit = produit;
    }
    public BigDecimal getPrixUnitaire(){
        return this.prixUnitaire;
    }
    public void setPrixUnitaire(BigDecimal prixUnitaire){
        this.prixUnitaire = prixUnitaire;
    }
    public BigDecimal getPrixVente(){
        return this.prixVente;
    }
    public void setPrixVente(BigDecimal prixVente){
        this.prixVente = prixVente;
    }
    public BigDecimal getQuantite(){
        return this.quantite;
    }
    public void setQuantite(BigDecimal quantite){
        this.quantite = quantite;
    }
    public BigDecimal getQuantiteAvoir(){
        return this.quantiteAvoir;
    }
    public void setQuantiteAvoir(BigDecimal quantiteAvoir){
        this.quantiteAvoir = quantiteAvoir;
    }
    public BigDecimal getRemise(){
        return this.remise;
    }
    public void setRemise(BigDecimal remise){
        this.remise = remise;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Achat getAchat(){
        return this.achat;
    }
    public void setAchat(Achat achat){
        this.achat = achat;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AchatItem achatItem = (AchatItem) o;
        return id != null && id.equals(achatItem.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

