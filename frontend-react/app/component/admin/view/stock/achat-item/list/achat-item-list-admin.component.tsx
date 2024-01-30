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


import {AchatItemAdminService} from 'app/controller/service/admin/stock/AchatItemAdminService.service';
import {AchatItemDto}  from 'app/controller/model/stock/AchatItem.model';
import {AchatItemCriteria} from 'app/controller/criteria/stock/AchatItemCriteria.model';

import {ProduitDto} from 'app/controller/model/commun/Produit.model';
import {ProduitAdminService} from 'app/controller/service/admin/commun/ProduitAdminService.service';
import {AchatDto} from 'app/controller/model/stock/Achat.model';
import {AchatAdminService} from 'app/controller/service/admin/stock/AchatAdminService.service';

import { useTranslation } from 'react-i18next';

import Edit from '../edit/achat-item-edit-admin.component';
import Create from '../create/achat-item-create-admin.component';
import View from '../view/achat-item-view-admin.component';


const List = () => {

    const { t } = useTranslation();

    const emptyItem = new AchatItemDto();
    const emptyCriteria = new AchatItemCriteria();
    const service = new AchatItemAdminService();


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
    } = useListHook<AchatItemDto, AchatItemCriteria>({ emptyItem, emptyCriteria,service, t})



    const [produits, setProduits] = useState<ProduitDto[]>([]);
    const [achats, setAchats] = useState<AchatDto[]>([]);

    const produitAdminService = new ProduitAdminService();
    const achatAdminService = new AchatAdminService();

    useEffect(() => {

        produitAdminService.getList().then(({data}) => setProduits(data)).catch(error => console.log(error));
        achatAdminService.getList().then(({data}) => setAchats(data)).catch(error => console.log(error));
        fetchItems(criteria);
    }, []);



    const header = (
    <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
        <h5 className="m-0">{t("achatItem.header")}</h5>
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
                                <label className="mb-1"  htmlFor="1">{t("achatItem.produitPlaceHolder")}</label>
                                <Dropdown id="1" value={criteria.produit} options={produits} onChange={(e) => setCriteria({ ...criteria, produit: e.target.value })} optionLabel="reference" filter showClear/>
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="2-1">{t("achatItem.prixUnitaireMin")}</label>
                                <InputNumber id="2-1" value={criteria.prixUnitaireMin} onChange={(e) => setCriteria({ ...criteria, prixUnitaireMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="2-2">{t("achatItem.prixUnitaireMax")}  </label>
                                <InputNumber id="2-2" value={criteria.prixUnitaireMax} onChange={(e) => setCriteria({ ...criteria, prixUnitaireMax: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="3-1">{t("achatItem.prixVenteMin")}</label>
                                <InputNumber id="3-1" value={criteria.prixVenteMin} onChange={(e) => setCriteria({ ...criteria, prixVenteMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="3-2">{t("achatItem.prixVenteMax")}  </label>
                                <InputNumber id="3-2" value={criteria.prixVenteMax} onChange={(e) => setCriteria({ ...criteria, prixVenteMax: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="4-1">{t("achatItem.quantiteMin")}</label>
                                <InputNumber id="4-1" value={criteria.quantiteMin} onChange={(e) => setCriteria({ ...criteria, quantiteMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="4-2">{t("achatItem.quantiteMax")}  </label>
                                <InputNumber id="4-2" value={criteria.quantiteMax} onChange={(e) => setCriteria({ ...criteria, quantiteMax: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="5-1">{t("achatItem.quantiteAvoirMin")}</label>
                                <InputNumber id="5-1" value={criteria.quantiteAvoirMin} onChange={(e) => setCriteria({ ...criteria, quantiteAvoirMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="5-2">{t("achatItem.quantiteAvoirMax")}  </label>
                                <InputNumber id="5-2" value={criteria.quantiteAvoirMax} onChange={(e) => setCriteria({ ...criteria, quantiteAvoirMax: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="6-1">{t("achatItem.remiseMin")}</label>
                                <InputNumber id="6-1" value={criteria.remiseMin} onChange={(e) => setCriteria({ ...criteria, remiseMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="6-2">{t("achatItem.remiseMax")}  </label>
                                <InputNumber id="6-2" value={criteria.remiseMax} onChange={(e) => setCriteria({ ...criteria, remiseMax: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="7">{t("achatItem.achatPlaceHolder")}</label>
                                <Dropdown id="7" value={criteria.achat} options={achats} onChange={(e) => setCriteria({ ...criteria, achat: e.target.value })} optionLabel="reference" filter showClear/>
                            </div>
                        </div>
                        <div style={{ marginTop : '1rem', display: 'flex', justifyContent: 'flex-end' }} >
                            <Button label={t("validate")} icon="pi pi-sort-amount-down" className="p-button-info mr-2" onClick={handleValidateClick} />
                            <Button label={t("cancel")} className="p-button-secondary mr-2"  icon="pi pi-times" onClick={handleCancelClick} />
                        </div>
                </Card>
                )}
                <DataTable ref={dt} value={items} selection={selectedItems} onSelectionChange={(e) => setSelectedItems(e.value as AchatItemDto[])} dataKey="id" className="datatable-responsive" globalFilter={globalFilter} header={header} responsiveLayout="scroll" >
                    <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}> </Column>
                    
                    <Column field="produit.reference" header={t("achatItem.produit")} sortable ></Column>
                    
                    
                    <Column field="prixUnitaire" header={t("achatItem.prixUnitaire")} sortable></Column>
                    
                    
                    <Column field="prixVente" header={t("achatItem.prixVente")} sortable></Column>
                    
                    
                    <Column field="quantite" header={t("achatItem.quantite")} sortable></Column>
                    
                    
                    <Column field="quantiteAvoir" header={t("achatItem.quantiteAvoir")} sortable></Column>
                    
                    
                    <Column field="remise" header={t("achatItem.remise")} sortable></Column>
                    
                    
                    <Column field="achat.reference" header={t("achatItem.achat")} sortable ></Column>
                    
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
                    {item && (<span>{t("achatItem.deleteAchatItemConfirmationMessage")} <b>{item.id}</b>?</span>)}
                    </div>
                </Dialog>

            <Dialog visible={deleteItemsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteItemsDialogFooter} onHide={hideDeleteItemsDialog} >
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {item && <span>{t("achatItem.deleteAchatItemsConfirmationMessage")}</span>}
                </div>
            </Dialog>

            </div>
        </div>
    </div>
);
};
export default List;

