package  ma.zs.stocky.ws.facade.admin.commun;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.zs.stocky.bean.core.commun.Produit;
import ma.zs.stocky.dao.criteria.core.commun.ProduitCriteria;
import ma.zs.stocky.service.facade.admin.commun.ProduitAdminService;
import ma.zs.stocky.ws.converter.commun.ProduitConverter;
import ma.zs.stocky.ws.dto.commun.ProduitDto;
import ma.zs.stocky.zynerator.controller.AbstractController;
import ma.zs.stocky.zynerator.dto.AuditEntityDto;
import ma.zs.stocky.zynerator.util.PaginatedList;


import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.zs.stocky.zynerator.process.Result;


import org.springframework.web.multipart.MultipartFile;
import ma.zs.stocky.zynerator.dto.FileTempDto;

@RestController
@RequestMapping("/api/admin/produit/")
public class ProduitRestAdmin  extends AbstractController<Produit, ProduitDto, ProduitCriteria, ProduitAdminService, ProduitConverter> {



    @Operation(summary = "upload one produit")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple produits")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all produits")
    @GetMapping("")
    public ResponseEntity<List<ProduitDto>> findAll() throws Exception {
        return super.findAll();
    }

    @Operation(summary = "Finds an optimized list of all produits")
    @GetMapping("optimized")
    public ResponseEntity<List<ProduitDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @Operation(summary = "Finds a produit by id")
    @GetMapping("id/{id}")
    public ResponseEntity<ProduitDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

    @Operation(summary = "Finds a produit by reference")
    @GetMapping("reference/{reference}")
    public ResponseEntity<ProduitDto> findByReference(@PathVariable String reference, String[] includes, String[] excludes) throws Exception {
        return super.findByReferenceEntity(new Produit(reference), includes, excludes);
    }

    @Operation(summary = "Saves the specified  produit")
    @PostMapping("")
    public ResponseEntity<ProduitDto> save(@RequestBody ProduitDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  produit")
    @PutMapping("")
    public ResponseEntity<ProduitDto> update(@RequestBody ProduitDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of produit")
    @PostMapping("multiple")
    public ResponseEntity<List<ProduitDto>> delete(@RequestBody List<ProduitDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified produit")
    @DeleteMapping("")
    public ResponseEntity<ProduitDto> delete(@RequestBody ProduitDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified produit")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple produits by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }



    @Operation(summary = "Finds a produit and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<ProduitDto> findWithAssociatedLists(@PathVariable Long id) {
        return super.findWithAssociatedLists(id);
    }

    @Operation(summary = "Finds produits by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<ProduitDto>> findByCriteria(@RequestBody ProduitCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated produits by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody ProduitCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports produits by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody ProduitCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets produit data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody ProduitCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public ProduitRestAdmin (ProduitAdminService service, ProduitConverter converter) {
        super(service, converter);
    }




}
