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

import  {ProduitDto}  from 'app/controller/model/commun/Produit.model';

type ProduitViewAdminType = {
    visible: boolean,
    onClose: () => void,
    selectedItem: ProduitDto,
    t: TFunction
}

const View: React.FC<ProduitViewAdminType> = ({visible,onClose,selectedItem, t}) => {

    const {
    onTabChange,
    hideDialog,
    itemDialogFooter,
    formateDate,
    parse,
    parseToIsoFormat,
    adaptDate,
    activeIndex
    } = useViewHook<ProduitDto>({selectedItem, onClose})

        return(
<Dialog visible={visible} style={{width: '70vw'}} header={t("produit.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
<TabView activeIndex={activeIndex} onTabChange={onTabChange}>
<TabPanel header={t("produit.tabPan")}>
    <div className="formgrid grid">

            <div className="field col-6">
                <label htmlFor="reference">{t("produit.reference")}</label>
                <InputText id="reference" value={selectedItem?.reference} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="libelle">{t("produit.libelle")}</label>
                <InputText id="libelle" value={selectedItem?.libelle} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="barcode">{t("produit.barcode")}</label>
                <InputText id="barcode" value={selectedItem?.barcode} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="discription">{t("produit.discription")}</label>
                <span className="p-float-label">
                   <InputTextarea id="discription" value={selectedItem?.discription} disabled rows={5} cols={30} />
                </span>
            </div>

                <div className="field col-6">
                    <label htmlFor="prixAchatMoyen">{t("produit.prixAchatMoyen")}</label>
                    <InputNumber id="prixAchatMoyen" value={selectedItem.prixAchatMoyen} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="quantite">{t("produit.quantite")}</label>
                    <InputNumber id="quantite" value={selectedItem.quantite} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="seuilAlert">{t("produit.seuilAlert")}</label>
                    <InputNumber id="seuilAlert" value={selectedItem.seuilAlert} disabled/>
                </div>

        </div>
</TabPanel>
</TabView>
</Dialog>
);
};
export default View;
