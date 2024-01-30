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


import {AchatAdminService} from 'app/controller/service/admin/stock/AchatAdminService.service';
import {AchatDto}  from 'app/controller/model/stock/Achat.model';
import {AchatCriteria} from 'app/controller/criteria/stock/AchatCriteria.model';

import {ClientDto} from 'app/controller/model/commun/Client.model';
import {ClientAdminService} from 'app/controller/service/admin/commun/ClientAdminService.service';

import { useTranslation } from 'react-i18next';

import Edit from '../edit/achat-edit-admin.component';
import Create from '../create/achat-create-admin.component';
import View from '../view/achat-view-admin.component';


const List = () => {

    const { t } = useTranslation();

    const emptyItem = new AchatDto();
    const emptyCriteria = new AchatCriteria();
    const service = new AchatAdminService();


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
    } = useListHook<AchatDto, AchatCriteria>({ emptyItem, emptyCriteria,service, t})



    const [clients, setClients] = useState<ClientDto[]>([]);

    const clientAdminService = new ClientAdminService();

    useEffect(() => {

        clientAdminService.getList().then(({data}) => setClients(data)).catch(error => console.log(error));
        fetchItems(criteria);
    }, []);



    const header = (
    <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
        <h5 className="m-0">{t("achat.header")}</h5>
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
                                <label className="mb-1"  htmlFor="1">{t("achat.reference")}</label>
                                <InputText id="1" value={criteria.reference} onChange={(e) => setCriteria({ ...criteria, reference: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="2-1">{t("achat.dateAchatMin")}</label>
                                <Calendar id="2-1" value={criteria.dateAchatFrom} onChange={(e) => setCriteria({ ...criteria, dateAchatFrom: e.value as Date })} dateFormat="dd-MM-yy" showIcon={true} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="2-2">{t("achat.dateAchatMax")}</label>
                                <Calendar id="2-2" value={criteria.dateAchatTo} onChange={(e) => setCriteria({ ...criteria, dateAchatTo: e.value as Date })} dateFormat="dd-MM-yy" showIcon={true} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="3-1">{t("achat.totalMin")}</label>
                                <InputNumber id="3-1" value={criteria.totalMin} onChange={(e) => setCriteria({ ...criteria, totalMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="3-2">{t("achat.totalMax")}  </label>
                                <InputNumber id="3-2" value={criteria.totalMax} onChange={(e) => setCriteria({ ...criteria, totalMax: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="4-1">{t("achat.totalPayeMin")}</label>
                                <InputNumber id="4-1" value={criteria.totalPayeMin} onChange={(e) => setCriteria({ ...criteria, totalPayeMin: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="4-2">{t("achat.totalPayeMax")}  </label>
                                <InputNumber id="4-2" value={criteria.totalPayeMax} onChange={(e) => setCriteria({ ...criteria, totalPayeMax: e.value })} mode="decimal" />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="5">{t("achat.description")}</label>
                                <InputText id="5" value={criteria.description} onChange={(e) => setCriteria({ ...criteria, description: e.target.value })} />
                            </div>
                            <div className="flex flex-column col-3">
                                <label className="mb-1"  htmlFor="6">{t("achat.clientPlaceHolder")}</label>
                                <Dropdown id="6" value={criteria.client} options={clients} onChange={(e) => setCriteria({ ...criteria, client: e.target.value })} optionLabel="nom" filter showClear/>
                            </div>
                        </div>
                        <div style={{ marginTop : '1rem', display: 'flex', justifyContent: 'flex-end' }} >
                            <Button label={t("validate")} icon="pi pi-sort-amount-down" className="p-button-info mr-2" onClick={handleValidateClick} />
                            <Button label={t("cancel")} className="p-button-secondary mr-2"  icon="pi pi-times" onClick={handleCancelClick} />
                        </div>
                </Card>
                )}
                <DataTable ref={dt} value={items} selection={selectedItems} onSelectionChange={(e) => setSelectedItems(e.value as AchatDto[])} dataKey="id" className="datatable-responsive" globalFilter={globalFilter} header={header} responsiveLayout="scroll" >
                    <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}> </Column>
                    
                    <Column field="reference" header={t("achat.reference")} sortable></Column>
                    
                    
                    <Column field="dateAchat" header={t("achat.dateAchat")} sortable body={formateDate("dateAchat")}></Column>
                    
                    
                    <Column field="total" header={t("achat.total")} sortable></Column>
                    
                    
                    <Column field="totalPaye" header={t("achat.totalPaye")} sortable></Column>
                    
                    
                    <Column field="client.nom" header={t("achat.client")} sortable ></Column>
                    
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
                    {item && (<span>{t("achat.deleteAchatConfirmationMessage")} <b>{item.reference}</b>?</span>)}
                    </div>
                </Dialog>

            <Dialog visible={deleteItemsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteItemsDialogFooter} onHide={hideDeleteItemsDialog} >
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {item && <span>{t("achat.deleteAchatsConfirmationMessage")}</span>}
                </div>
            </Dialog>

            </div>
        </div>
    </div>
);
};
export default List;

