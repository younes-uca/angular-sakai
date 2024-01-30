package ma.zs.stocky.zynerator.controller;

import jakarta.servlet.http.HttpServletRequest;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;
import ma.zs.stocky.zynerator.converter.AbstractConverter;
import ma.zs.stocky.zynerator.criteria.BaseCriteria;
import ma.zs.stocky.zynerator.dto.BaseDto;
import ma.zs.stocky.zynerator.dto.FileTempDto;
import ma.zs.stocky.zynerator.exception.BusinessRuleException;
import ma.zs.stocky.zynerator.exception.GlobalException;
import ma.zs.stocky.zynerator.export.ExportModel;
import ma.zs.stocky.zynerator.service.IService;
import ma.zs.stocky.zynerator.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class AbstractHistoryController { /*< H extends HistBusinessObject,  HistoryCriteria extends BaseCriteria> {
    protected SERV service;
    protected AbstractConverter<T, DTO, H> converter;
    @Autowired
    private MessageSource messageSource;


    public ResponseEntity<AuditEntityDto> findHistoryById(Long id) throws Exception {
        AuditEntityDto h = service.findHistoryById(id);
        return new ResponseEntity<>(h, HttpStatus.OK);
    }

    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(HistoryCriteria criteria) throws Exception {
        List<AuditEntityDto> list = service.findHistoryPaginatedByCriteria(criteria, criteria.getPage(), criteria.getMaxResults(), criteria.getSortOrder(), criteria.getSortField());
        PaginatedList paginatedList = new PaginatedList();
        paginatedList.setList(list);
        if (list != null && !list.isEmpty()) {
            int dateSize = service.getHistoryDataSize(criteria);
            paginatedList.setDataSize(dateSize);
        }
        return new ResponseEntity<PaginatedList>(paginatedList, HttpStatus.OK);
    }

    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody HistoryCriteria criteria) throws Exception {
        if (criteria.getExportModel() == null)
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        criteria.setMaxResults(null);
        return null;//TODO correct this bug
    }

    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody HistoryCriteria criteria) throws Exception {
        int count = service.getHistoryDataSize(criteria);
        return new ResponseEntity<Integer>(count, HttpStatus.OK);
    }

    public AbstractHistoryController(SERV service, CONV converter) {
        this.service = service;
        this.converter = converter;
    }
    */

}
