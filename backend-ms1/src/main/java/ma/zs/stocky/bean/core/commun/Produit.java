package ma.zs.stocky.bean.core.commun;

import java.util.Objects;







import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;


import java.math.BigDecimal;


@Entity
@Table(name = "produit")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="produit_seq",sequenceName="produit_seq",allocationSize=1, initialValue = 1)
public class Produit   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String reference;
    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String barcode;
    @Column(length = 500)
    private String discription;
    private BigDecimal prixAchatMoyen = BigDecimal.ZERO;
    private BigDecimal quantite = BigDecimal.ZERO;
    private BigDecimal seuilAlert = BigDecimal.ZERO;



    public Produit(){
        super();
    }

    public Produit(Long id,String reference){
        this.id = id;
        this.reference = reference ;
    }
    public Produit(String reference){
        this.reference = reference ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="produit_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }
    public String getBarcode(){
        return this.barcode;
    }
    public void setBarcode(String barcode){
        this.barcode = barcode;
    }
    public String getDiscription(){
        return this.discription;
    }
    public void setDiscription(String discription){
        this.discription = discription;
    }
    public BigDecimal getPrixAchatMoyen(){
        return this.prixAchatMoyen;
    }
    public void setPrixAchatMoyen(BigDecimal prixAchatMoyen){
        this.prixAchatMoyen = prixAchatMoyen;
    }
    public BigDecimal getQuantite(){
        return this.quantite;
    }
    public void setQuantite(BigDecimal quantite){
        this.quantite = quantite;
    }
    public BigDecimal getSeuilAlert(){
        return this.seuilAlert;
    }
    public void setSeuilAlert(BigDecimal seuilAlert){
        this.seuilAlert = seuilAlert;
    }

    @Transient
    public String getLabel() {
        label = reference;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Produit produit = (Produit) o;
        return id != null && id.equals(produit.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

