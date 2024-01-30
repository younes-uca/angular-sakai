import {Button} from 'primereact/button';
import {Column} from 'primereact/column';


import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {FileUpload} from 'primereact/fileupload';
import {InputText} from 'primereact/inputtext';
import {Toast} from 'primereact/toast';
import {Toolbar} from 'primereact/toolbar';
import React, {useEffect, useRef, useState} from 'react';
import {Paginator, PaginatorPageChangeEvent} from 'primereact/paginator';
import {Card} from 'primereact/card';
import {Calendar} from 'primereact/calendar';
import {InputNumber} from 'primereact/inputnumber';
import {Dropdown} from 'primereact/dropdown';
import {format} from "date-fns";
import useListHook from "app/component/zyhook/useListhook";
import {MessageService} from 'app/zynerator/service/MessageService';


import {ProduitAdminService} from 'app/controller/service/admin/commun/ProduitAdminService.service';
import {ProduitDto}  from 'app/controller/model/commun/Produit.model';
import {ProduitCriteria} from 'app/controller/criteria/commun/ProduitCriteria.model';


import { useTranslation } from 'react-i18next';

import Edit from '../edit/produit-edit-admin.component';
import Create from '../create/produit-create-admin.component';
import View from '../view/produit-view-admin.component';


const List = () => {

    const { t } = useTranslation();

    const emptyItem = new ProduitDto();
    const emptyCriteria = new ProduitCriteria();
    const service = new ProduitAdminService();


    const {
        items,
        showSearch,
        deleteItemDialog,
        item,
        selectedItems,
        setSelectedItems,
        hideDeleteItemDialog,
        globalFilter,
        setGlobalFilter,
        showCreateDialog,
        setShowCreateDialog,
        showEditDialog,
        setShowEditDialog,
        showViewDialog,
        setShowViewDialog,
        selectedItem,
        setSelectedItem,
        rows,
        totalRecords,
        criteria,
        setCriteria,
        first,
        fetchItems,
        toast,
        dt,
        findByCriteriaShow,
        handleCancelClick,
        confirmDeleteSelected,
        exportCSV,
        deleteItem,
        deleteItemDialogFooter,
        leftToolbarTemplate,
        rightToolbarTemplate,
        actionBodyTemplate,
        CustomBooleanCell,
        handleValidateClick,
        onPage,
        showCreateModal,
        showEditModal,
        showViewModal,
        add,
        update,
        confirmDeleteItem,
        statusBodyTemplate,
        formateDate,
        deleteSelectedItems,
        deleteItemsDialog,
        deleteItemsDialogFooter,
        hideDeleteItemsDialog
    } = useListHook<ProduitDto, ProduitCriteria>({ emptyItem, emptyCriteria,service, t})





    useEffect(() => {

        fetchItems(criteria);
    }, []);



    const header = (
    <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
        <h5 className="m-0">{t("produit.header")}</h5>
        <span className="block mt-2 md:mt-0 p-input-icon-left"><i className="pi pi-search"/>
            <InputText type="search" onInput={(e) => setGlobalFilter(e.currentTarget.value)}
                       placeholder={t("search")}/> </span>
    </div>
    );
    return (
    <div className="grid crud-demo">
        <div className="col-12">
            <div className="card">
                <Toast ref={toast} />
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                {findByCriteriaShow && (
                <Card title={t("search")} className="mb-5">
                        <div className="grid">
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="1">{t("produit.reference")}</label>
                                <InputText id="1" value={criteria.reference} onChange={(e) => setCriteria({ ...criteria, reference: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="2">{t("produit.libelle")}</label>
                                <InputText id="2" value={criteria.libelle} onChange={(e) => setCriteria({ ...criteria, libelle: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="3">{t("produit.barcode")}</label>
                                <InputText id="3" value={criteria.barcode} onChange={(e) => setCriteria({ ...criteria, barcode: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="4">{t("produit.discription")}</label>
                                <InputText id="4" value={criteria.discription} onChange={(e) => setCriteria({ ...criteria, discription: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="5-1">{t("produit.prixAchatMoyenMin")}</label>
                                <InputNumber id="5-1" value={criteria.prixAchatMoyenMin} onChange={(e) => setCriteria({ ...criteria, prixAchatMoyenMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="5-2">{t("produit.prixAchatMoyenMax")}  </label>
                                <InputNumber id="5-2" value={criteria.prixAchatMoyenMax} onChange={(e) => setCriteria({ ...criteria, prixAchatMoyenMax: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="6-1">{t("produit.quantiteMin")}</label>
                                <InputNumber id="6-1" value={criteria.quantiteMin} onChange={(e) => setCriteria({ ...criteria, quantiteMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="6-2">{t("produit.quantiteMax")}  </label>
                                <InputNumber id="6-2" value={criteria.quantiteMax} onChange={(e) => setCriteria({ ...criteria, quantiteMax: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="7-1">{t("produit.seuilAlertMin")}</label>
                                <InputNumber id="7-1" value={criteria.seuilAlertMin} onChange={(e) => setCriteria({ ...criteria, seuilAlertMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="7-2">{t("produit.seuilAlertMax")}  </label>
                                <InputNumber id="7-2" value={criteria.seuilAlertMax} onChange={(e) => setCriteria({ ...criteria, seuilAlertMax: e.value })} mode="decimal" />
                            </div>
                        </div>
                        <div style={{ marginTop : '1rem', display: 'flex', justifyContent: 'flex-end' }} >
                            <Button label={t("validate")} icon="pi pi-sort-amount-down" className="p-button-info mr-2" onClick={handleValidateClick} />
                            <Button label={t("cancel")} className="p-button-secondary mr-2"  icon="pi pi-times" onClick={handleCancelClick} />
                        </div>
                </Card>
                )}
                <DataTable ref={dt} value={items} selection={selectedItems} onSelectionChange={(e) => setSelectedItems(e.value as ProduitDto[])} dataKey="id" className="datatable-responsive" globalFilter={globalFilter} header={header} responsiveLayout="scroll" >
                    <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}> </Column>
                    
                    <Column field="reference" header={t("produit.reference")} sortable></Column>
                    
                    
                    <Column field="libelle" header={t("produit.libelle")} sortable></Column>
                    
                    
                    <Column field="barcode" header={t("produit.barcode")} sortable></Column>
                    
                    
                    <Column field="prixAchatMoyen" header={t("produit.prixAchatMoyen")} sortable></Column>
                    
                    
                    <Column field="quantite" header={t("produit.quantite")} sortable></Column>
                    
                    
                    <Column field="seuilAlert" header={t("produit.seuilAlert")} sortable></Column>
                    
                    <Column header={t("actions")} body={actionBodyTemplate}></Column>
                </DataTable>
                <div className="p-d-flex p-ai-center p-jc-between">
                    <Paginator onPageChange={onPage} first={first} rows={rows} totalRecords={totalRecords} />
                </div>
                {showCreateDialog && <Create visible={showCreateDialog} onClose={() => setShowCreateDialog(false)} add={add} showToast={toast} list={items} service={service} t={t} />}

                {showEditDialog && <Edit  visible={showEditDialog} onClose={() =>  { setShowEditDialog(false); setSelectedItem(emptyItem); }} showToast={toast} selectedItem={selectedItem} update={update} list={items} service={service}   t={t} />}

                {showViewDialog && <View visible={showViewDialog} onClose={() =>  { setShowViewDialog(false); setSelectedItem(emptyItem); }} selectedItem={selectedItem}   t={t} />}
                <Dialog visible={deleteItemDialog} style={{width: '450px'}} header={t("confirm")} modal footer={deleteItemDialogFooter} onHide={hideDeleteItemDialog}>
                    <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{fontSize: '2rem'}}/>
                    {item && (<span>{t("produit.deleteProduitConfirmationMessage")} <b>{item.reference}</b>?</span>)}
                    </div>
                </Dialog>

            <Dialog visible={deleteItemsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteItemsDialogFooter} onHide={hideDeleteItemsDialog} >
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {item && <span>{t("produit.deleteProduitsConfirmationMessage")}</span>}
                </div>
            </Dialog>

            </div>
        </div>
    </div>
);
};
export default List;

