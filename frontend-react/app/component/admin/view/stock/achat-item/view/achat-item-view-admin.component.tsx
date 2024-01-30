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

import  {AchatItemDto}  from 'app/controller/model/stock/AchatItem.model';

type AchatItemViewAdminType = {
    visible: boolean,
    onClose: () => void,
    selectedItem: AchatItemDto,
    t: TFunction
}

const View: React.FC<AchatItemViewAdminType> = ({visible,onClose,selectedItem, t}) => {

    const {
    onTabChange,
    hideDialog,
    itemDialogFooter,
    formateDate,
    parse,
    parseToIsoFormat,
    adaptDate,
    activeIndex
    } = useViewHook<AchatItemDto>({selectedItem, onClose})

        return(
<Dialog visible={visible} style={{width: '70vw'}} header={t("achatItem.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
<TabView activeIndex={activeIndex} onTabChange={onTabChange}>
<TabPanel header={t("achatItem.tabPan")}>
    <div className="formgrid grid">

                <div className="field col-6">
                    <label htmlFor="produit">{t("achatItem.produit")}</label>
                    <InputText  id="produitDropdown"  value={selectedItem?.produit?.reference}  disabled  />
                </div>
                <div className="field col-6">
                    <label htmlFor="prixUnitaire">{t("achatItem.prixUnitaire")}</label>
                    <InputNumber id="prixUnitaire" value={selectedItem.prixUnitaire} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="prixVente">{t("achatItem.prixVente")}</label>
                    <InputNumber id="prixVente" value={selectedItem.prixVente} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="quantite">{t("achatItem.quantite")}</label>
                    <InputNumber id="quantite" value={selectedItem.quantite} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="quantiteAvoir">{t("achatItem.quantiteAvoir")}</label>
                    <InputNumber id="quantiteAvoir" value={selectedItem.quantiteAvoir} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="remise">{t("achatItem.remise")}</label>
                    <InputNumber id="remise" value={selectedItem.remise} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="achat">{t("achatItem.achat")}</label>
                    <InputText  id="achatDropdown"  value={selectedItem?.achat?.reference}  disabled  />
                </div>
        </div>
</TabPanel>
</TabView>
</Dialog>
);
};
export default View;
