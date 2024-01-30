import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import {Dropdown, DropdownChangeEvent} from 'primereact/dropdown';
import {TabView, TabPanel} from 'primereact/tabview';
import {Dialog} from 'primereact/dialog';
import {InputNumber, InputNumberChangeEvent} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {classNames} from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import React, {useEffect, useState} from 'react';
import {Calendar, CalendarChangeEvent} from 'primereact/calendar';
import { format } from 'date-fns';
import { parse } from 'date-fns';
import { InputSwitch } from 'primereact/inputswitch';
import {MultiSelect, MultiSelectChangeEvent} from 'primereact/multiselect';

import {MessageService} from 'app/zynerator/service/MessageService';



import {ClientAdminService} from 'app/controller/service/admin/commun/ClientAdminService.service';
import  {ClientDto}  from 'app/controller/model/commun/Client.model';
import {ClientCriteria} from "app/controller/criteria/commun/ClientCriteria.model";

import {TFunction} from "i18next";
import {Toast} from "primereact/toast";

import useEditHook from "app/component/zyhook/useEdit.hook";


type ClientEditAdminType = {
    visible: boolean,
    onClose: () => void,
    showToast: React.Ref<Toast>,
    selectedItem: ClientDto
    update: (item: ClientDto) => void,
    list: ClientDto[],
    service: ClientAdminService,
    t: TFunction
}
const Edit: React.FC<ClientEditAdminType> = ({visible, onClose, showToast, selectedItem, update, list, service, t}) => {


    const isFormValid = () => {
    let errorMessages = new Array<string>();
        if(item.cin == '')
            errorMessages.push("cin is required")
        if(item.nom == '')
            errorMessages.push("nom is required")
        return errorMessages.length == 0 ;
    }
    const emptyItem = new ClientDto();


    const {
        item,
        setItem,
        submitted,
        setSubmitted,
        activeIndex,
        setActiveIndex,
        activeTab,
        setActiveTab,
        onInputTextChange,
        onInputDateChange,
        onInputNumerChange,
        onMultiSelectChange,
        onBooleanInputChange,
        onDropdownChange,
        onTabChange,
        hideDialog,
        editItem,
        formateDate,
        parseToIsoFormat,
        adaptDate
        } = useEditHook<ClientDto, ClientCriteria>({list, selectedItem, onClose, update, showToast,service, t, isFormValid})



    useEffect(() => {


        }, []);







    const itemDialogFooter = ( <>
        <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog} />
        <Button label="Save" icon="pi pi-check" onClick={editItem} /> </>
    );



    return(
    <Dialog visible={visible} style={{width: '70vw'}} header={t("client.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog}>
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header={t("client.tabPan")}>
                <div className="formgrid grid">
                    <div className="field col-6">
                        <label htmlFor="cin">{t("client.cin")}</label>
                        <InputText id="cin" value={item ? item.cin : ''} onChange={(e) => onInputTextChange(e, 'cin')} required className={classNames({'p-invalid': submitted && !item.cin})} />
                        {submitted && !item.cin && <small className="p-invalid">Cin is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="nom">{t("client.nom")}</label>
                        <InputText id="nom" value={item ? item.nom : ''} onChange={(e) => onInputTextChange(e, 'nom')} required className={classNames({'p-invalid': submitted && !item.nom})} />
                        {submitted && !item.nom && <small className="p-invalid">Nom is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="tel">{t("client.tel")}</label>
                        <InputText id="tel" value={item ? item.tel : ''} onChange={(e) => onInputTextChange(e, 'tel')} required className={classNames({'p-invalid': submitted && !item.tel})} />
                        {submitted && !item.tel && <small className="p-invalid">Tel is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="email">{t("client.email")}</label>
                        <InputText id="email" value={item ? item.email : ''} onChange={(e) => onInputTextChange(e, 'email')} required className={classNames({'p-invalid': submitted && !item.email})} />
                        {submitted && !item.email && <small className="p-invalid">Email is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="adresse">{t("client.adresse")}</label>
                        <InputText id="adresse" value={item ? item.adresse : ''} onChange={(e) => onInputTextChange(e, 'adresse')} required className={classNames({'p-invalid': submitted && !item.adresse})} />
                        {submitted && !item.adresse && <small className="p-invalid">Adresse is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="description">{t("client.description")}</label>
                        <span className="p-float-label">
                            <InputTextarea id="description" value={item ? item.description : ''} onChange={(e) => onInputTextChange(e, 'description')} rows={5} cols={30}/>
                        </span>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="creance">{t("client.creance")}</label>
                        <InputNumber id="creance" value={item ? item.creance : 0} onChange={(e) => onInputNumerChange(e, 'creance')}/>
                    </div>
                </div>
            </TabPanel>
        </TabView>
    </Dialog>
);
};
export default Edit;


