import {Column} from 'primereact/column';
import {TabPanel, TabView} from 'primereact/tabview';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputNumber} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import React from 'react';
import {Calendar} from 'primereact/calendar';
import {InputSwitch} from 'primereact/inputswitch';
import {TFunction} from "i18next";
import useViewHook from "app/component/zyhook/useViewhook";

import  {ClientDto}  from 'app/controller/model/commun/Client.model';

type ClientViewAdminType = {
    visible: boolean,
    onClose: () => void,
    selectedItem: ClientDto,
    t: TFunction
}

const View: React.FC<ClientViewAdminType> = ({visible,onClose,selectedItem, t}) => {

    const {
    onTabChange,
    hideDialog,
    itemDialogFooter,
    formateDate,
    parse,
    parseToIsoFormat,
    adaptDate,
    activeIndex
    } = useViewHook<ClientDto>({selectedItem, onClose})

        return(
<Dialog visible={visible} style={{width: '70vw'}} header={t("client.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
<TabView activeIndex={activeIndex} onTabChange={onTabChange}>
<TabPanel header={t("client.tabPan")}>
    <div className="formgrid grid">

            <div className="field col-6">
                <label htmlFor="cin">{t("client.cin")}</label>
                <InputText id="cin" value={selectedItem?.cin} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="nom">{t("client.nom")}</label>
                <InputText id="nom" value={selectedItem?.nom} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="tel">{t("client.tel")}</label>
                <InputText id="tel" value={selectedItem?.tel} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="email">{t("client.email")}</label>
                <InputText id="email" value={selectedItem?.email} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="adresse">{t("client.adresse")}</label>
                <InputText id="adresse" value={selectedItem?.adresse} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="description">{t("client.description")}</label>
                <span className="p-float-label">
                   <InputTextarea id="description" value={selectedItem?.description} disabled rows={5} cols={30} />
                </span>
            </div>

                <div className="field col-6">
                    <label htmlFor="creance">{t("client.creance")}</label>
                    <InputNumber id="creance" value={selectedItem.creance} disabled/>
                </div>

        </div>
</TabPanel>
</TabView>
</Dialog>
);
};
export default View;
