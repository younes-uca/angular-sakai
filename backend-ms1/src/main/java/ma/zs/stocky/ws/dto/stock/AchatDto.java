package  ma.zs.stocky.ws.dto.stock;

import ma.zs.stocky.zynerator.audit.Log;
import ma.zs.stocky.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;
import java.util.Date;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.math.BigDecimal;


import ma.zs.stocky.ws.dto.commun.ProduitDto;
import ma.zs.stocky.ws.dto.commun.ClientDto;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class AchatDto  extends AuditBaseDto {

    private String reference  ;
    private String dateAchat ;
    private BigDecimal total  ;
    private BigDecimal totalPaye  ;
    private String description  ;

    private ClientDto client ;

    private List<AchatItemDto> achatItems ;


    public AchatDto(){
        super();
    }



    @Log
    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getDateAchat(){
        return this.dateAchat;
    }
    public void setDateAchat(String dateAchat){
        this.dateAchat = dateAchat;
    }

    @Log
    public BigDecimal getTotal(){
        return this.total;
    }
    public void setTotal(BigDecimal total){
        this.total = total;
    }

    @Log
    public BigDecimal getTotalPaye(){
        return this.totalPaye;
    }
    public void setTotalPaye(BigDecimal totalPaye){
        this.totalPaye = totalPaye;
    }

    @Log
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }


    public ClientDto getClient(){
        return this.client;
    }

    public void setClient(ClientDto client){
        this.client = client;
    }



    public List<AchatItemDto> getAchatItems(){
        return this.achatItems;
    }

    public void setAchatItems(List<AchatItemDto> achatItems){
        this.achatItems = achatItems;
    }



}
