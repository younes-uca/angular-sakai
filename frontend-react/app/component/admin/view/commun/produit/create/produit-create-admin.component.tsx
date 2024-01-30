import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import {TabView, TabPanel} from 'primereact/tabview';
import {Dialog} from 'primereact/dialog';
import {InputNumber, InputNumberChangeEvent} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {classNames} from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import React, {useEffect, useState} from 'react';
import {Calendar, CalendarChangeEvent} from 'primereact/calendar';
import { format } from 'date-fns';
import {InputSwitch, InputSwitchChangeEvent} from 'primereact/inputswitch';
import {Dropdown, DropdownChangeEvent} from 'primereact/dropdown';
import {MultiSelect, MultiSelectChangeEvent} from 'primereact/multiselect';
import {MessageService} from 'app/zynerator/service/MessageService';

import {ProduitAdminService} from 'app/controller/service/admin/commun/ProduitAdminService.service';
import  {ProduitDto}  from 'app/controller/model/commun/Produit.model';
import {ProduitCriteria} from "app/controller/criteria/commun/ProduitCriteria.model";

import {TFunction} from "i18next";
import {Toast} from "primereact/toast";
import useCreateHook from "app/component/zyhook/useCreate.hook";



type ProduitCreateAdminType = {
    visible: boolean,
    onClose: () => void,
    add: (item: ProduitDto) => void,
    showToast: React.Ref<Toast>,
    list: ProduitDto[],
    service: ProduitAdminService,
    t: TFunction
}
const Create: React.FC<ProduitCreateAdminType> = ({visible, onClose, add, showToast, list, service, t}) => {


    const isFormValid = () => {
    let errorMessages = new Array<string>();
                if(item.reference == '')
                    errorMessages.push("reference is required")
        return errorMessages.length == 0 ;
    }
    const emptyItem = new ProduitDto();
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
            onTabChange,
            onDropdownChange,
            hideDialog,
            saveItem,
            formateDate
        } = useCreateHook<ProduitDto, ProduitCriteria>({list, emptyItem, onClose, add, showToast,service, isFormValid})


    useEffect(() => {
    }, []);








    const itemDialogFooter = ( <>
        <Button label={t("cancel")} icon="pi pi-times" text onClick={hideDialog} />
        <Button label={t("save")} icon="pi pi-check" onClick={saveItem} /> </>
    );

return(
        <Dialog visible={visible} style={{width: '70vw'}} header={t("produit.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header={t("produit.tabPan")}>
                <div className="formgrid grid">
                    <div className="field col-6">
                        <label htmlFor="reference">{t("produit.reference")}</label>
                        <InputText id="reference" value={item.reference} onChange={(e) => onInputTextChange(e, 'reference')} required className={classNames({'p-invalid': submitted && !item.reference})} />
                        {submitted && !item.reference && <small className="p-invalid">Reference is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="libelle">{t("produit.libelle")}</label>
                        <InputText id="libelle" value={item.libelle} onChange={(e) => onInputTextChange(e, 'libelle')} required className={classNames({'p-invalid': submitted && !item.libelle})} />
                        {submitted && !item.libelle && <small className="p-invalid">Libelle is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="barcode">{t("produit.barcode")}</label>
                        <InputText id="barcode" value={item.barcode} onChange={(e) => onInputTextChange(e, 'barcode')} required className={classNames({'p-invalid': submitted && !item.barcode})} />
                        {submitted && !item.barcode && <small className="p-invalid">Barcode is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="discription">{t("produit.discription")}</label>
                        <span className="p-float-label">
                        <InputTextarea id="discription" value={item.discription} onChange={(e) => onInputTextChange(e, 'discription')} rows={5} cols={30}/>
                    </span>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="prixAchatMoyen">{t("produit.prixAchatMoyen")}</label>
                        <InputNumber id="prixAchatMoyen" value={item.prixAchatMoyen} onChange={(e) => onInputNumerChange(e, 'prixAchatMoyen')} />
                    </div>
                    <div className="field col-6">
                        <label htmlFor="quantite">{t("produit.quantite")}</label>
                        <InputNumber id="quantite" value={item.quantite} onChange={(e) => onInputNumerChange(e, 'quantite')} />
                    </div>
                    <div className="field col-6">
                        <label htmlFor="seuilAlert">{t("produit.seuilAlert")}</label>
                        <InputNumber id="seuilAlert" value={item.seuilAlert} onChange={(e) => onInputNumerChange(e, 'seuilAlert')} />
                    </div>
                </div>
            </TabPanel>
        </TabView>
    </Dialog>
);
};
export default Create;
