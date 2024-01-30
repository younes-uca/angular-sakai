package ma.zs.stocky.bean.core.stock;

import java.util.Objects;
import java.util.List;

import java.time.LocalDateTime;


import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import ma.zs.stocky.bean.core.commun.Produit;
import ma.zs.stocky.bean.core.commun.Client;


import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;


import java.math.BigDecimal;


@Entity
@Table(name = "achat")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="achat_seq",sequenceName="achat_seq",allocationSize=1, initialValue = 1)
public class Achat   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String reference;
    private LocalDateTime dateAchat ;
    private BigDecimal total = BigDecimal.ZERO;
    private BigDecimal totalPaye = BigDecimal.ZERO;
    @Column(length = 500)
    private String description;

    private Client client ;

    private List<AchatItem> achatItems ;

    public Achat(){
        super();
    }

    public Achat(Long id,String reference){
        this.id = id;
        this.reference = reference ;
    }
    public Achat(String reference){
        this.reference = reference ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="achat_seq")
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
    public LocalDateTime getDateAchat(){
        return this.dateAchat;
    }
    public void setDateAchat(LocalDateTime dateAchat){
        this.dateAchat = dateAchat;
    }
    public BigDecimal getTotal(){
        return this.total;
    }
    public void setTotal(BigDecimal total){
        this.total = total;
    }
    public BigDecimal getTotalPaye(){
        return this.totalPaye;
    }
    public void setTotalPaye(BigDecimal totalPaye){
        this.totalPaye = totalPaye;
    }
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Client getClient(){
        return this.client;
    }
    public void setClient(Client client){
        this.client = client;
    }
    @OneToMany(mappedBy = "achat")

    public List<AchatItem> getAchatItems(){
        return this.achatItems;
    }
    public void setAchatItems(List<AchatItem> achatItems){
        this.achatItems = achatItems;
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
        Achat achat = (Achat) o;
        return id != null && id.equals(achat.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

