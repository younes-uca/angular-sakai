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


import {ClientAdminService} from 'app/controller/service/admin/commun/ClientAdminService.service';
import {ClientDto}  from 'app/controller/model/commun/Client.model';
import {ClientCriteria} from 'app/controller/criteria/commun/ClientCriteria.model';


import { useTranslation } from 'react-i18next';

import Edit from '../edit/client-edit-admin.component';
import Create from '../create/client-create-admin.component';
import View from '../view/client-view-admin.component';


const List = () => {

    const { t } = useTranslation();

    const emptyItem = new ClientDto();
    const emptyCriteria = new ClientCriteria();
    const service = new ClientAdminService();


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
    } = useListHook<ClientDto, ClientCriteria>({ emptyItem, emptyCriteria,service, t})





    useEffect(() => {

        fetchItems(criteria);
    }, []);



    const header = (
    <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
        <h5 className="m-0">{t("client.header")}</h5>
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
                                <label className="mb-1"  htmlFor="1">{t("client.cin")}</label>
                                <InputText id="1" value={criteria.cin} onChange={(e) => setCriteria({ ...criteria, cin: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="2">{t("client.nom")}</label>
                                <InputText id="2" value={criteria.nom} onChange={(e) => setCriteria({ ...criteria, nom: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="3">{t("client.tel")}</label>
                                <InputText id="3" value={criteria.tel} onChange={(e) => setCriteria({ ...criteria, tel: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="4">{t("client.email")}</label>
                                <InputText id="4" value={criteria.email} onChange={(e) => setCriteria({ ...criteria, email: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="5">{t("client.adresse")}</label>
                                <InputText id="5" value={criteria.adresse} onChange={(e) => setCriteria({ ...criteria, adresse: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="6">{t("client.description")}</label>
                                <InputText id="6" value={criteria.description} onChange={(e) => setCriteria({ ...criteria, description: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="7-1">{t("client.creanceMin")}</label>
                                <InputNumber id="7-1" value={criteria.creanceMin} onChange={(e) => setCriteria({ ...criteria, creanceMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="7-2">{t("client.creanceMax")}  </label>
                                <InputNumber id="7-2" value={criteria.creanceMax} onChange={(e) => setCriteria({ ...criteria, creanceMax: e.value })} mode="decimal" />
                            </div>
                        </div>
                        <div style={{ marginTop : '1rem', display: 'flex', justifyContent: 'flex-end' }} >
                            <Button label={t("validate")} icon="pi pi-sort-amount-down" className="p-button-info mr-2" onClick={handleValidateClick} />
                            <Button label={t("cancel")} className="p-button-secondary mr-2"  icon="pi pi-times" onClick={handleCancelClick} />
                        </div>
                </Card>
                )}
                <DataTable ref={dt} value={items} selection={selectedItems} onSelectionChange={(e) => setSelectedItems(e.value as ClientDto[])} dataKey="id" className="datatable-responsive" globalFilter={globalFilter} header={header} responsiveLayout="scroll" >
                    <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}> </Column>
                    
                    <Column field="cin" header={t("client.cin")} sortable></Column>
                    
                    
                    <Column field="nom" header={t("client.nom")} sortable></Column>
                    
                    
                    <Column field="tel" header={t("client.tel")} sortable></Column>
                    
                    
                    <Column field="email" header={t("client.email")} sortable></Column>
                    
                    
                    <Column field="adresse" header={t("client.adresse")} sortable></Column>
                    
                    
                    <Column field="creance" header={t("client.creance")} sortable></Column>
                    
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
                    {item && (<span>{t("client.deleteClientConfirmationMessage")} <b>{item.nom}</b>?</span>)}
                    </div>
                </Dialog>

            <Dialog visible={deleteItemsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteItemsDialogFooter} onHide={hideDeleteItemsDialog} >
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {item && <span>{t("client.deleteClientsConfirmationMessage")}</span>}
                </div>
            </Dialog>

            </div>
        </div>
    </div>
);
};
export default List;

