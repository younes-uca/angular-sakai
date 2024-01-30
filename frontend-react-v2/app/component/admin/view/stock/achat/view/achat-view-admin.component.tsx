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

import  {AchatDto}  from 'app/controller/model/stock/Achat.model';

type AchatViewAdminType = {
    visible: boolean,
    onClose: () => void,
    selectedItem: AchatDto,
    t: TFunction
}

const View: React.FC<AchatViewAdminType> = ({visible,onClose,selectedItem, t}) => {

    const {
    onTabChange,
    hideDialog,
    itemDialogFooter,
    formateDate,
    parse,
    parseToIsoFormat,
    adaptDate,
    activeIndex
    } = useViewHook<AchatDto>({selectedItem, onClose})

        return(
<Dialog visible={visible} style={{width: '70vw'}} header={t("achat.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
<TabView activeIndex={activeIndex} onTabChange={onTabChange}>
<TabPanel header={t("achat.tabPan")}>
    <div className="formgrid grid">

            <div className="field col-6">
                <label htmlFor="reference">{t("achat.reference")}</label>
                <InputText id="reference" value={selectedItem?.reference} disabled   />
            </div>

        <div className="field col-6">
            <label htmlFor="dateAchat">{t("achat.dateAchat")}</label>
            <Calendar id="dateAchat" value={adaptDate(selectedItem?.dateAchat)} disabled dateFormat="dd/mm/yy" showIcon={true}  />
        </div>

                <div className="field col-6">
                    <label htmlFor="total">{t("achat.total")}</label>
                    <InputNumber id="total" value={selectedItem.total} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="totalPaye">{t("achat.totalPaye")}</label>
                    <InputNumber id="totalPaye" value={selectedItem.totalPaye} disabled/>
                </div>

            <div className="field col-6">
                <label htmlFor="description">{t("achat.description")}</label>
                <span className="p-float-label">
                   <InputTextarea id="description" value={selectedItem?.description} disabled rows={5} cols={30} />
                </span>
            </div>

                <div className="field col-6">
                    <label htmlFor="client">{t("achat.client")}</label>
                    <InputText  id="clientDropdown"  value={selectedItem?.client?.nom}  disabled  />
                </div>
        </div>
</TabPanel>
    <TabPanel header={t("achat.achatItems")}>
                <div className="card">
                    <DataTable value={selectedItem?.achatItems} tableStyle={{minWidth: '50rem'}} dataKey="id">
                                <Column field="produit.reference" header={t("achatItem.produit")}></Column>
                                <Column field="prixUnitaire" header={t("achatItem.prixUnitaire")}   ></Column>
                                <Column field="prixVente" header={t("achatItem.prixVente")}   ></Column>
                                <Column field="quantite" header={t("achatItem.quantite")}   ></Column>
                                <Column field="quantiteAvoir" header={t("achatItem.quantiteAvoir")}   ></Column>
                                <Column field="remise" header={t("achatItem.remise")}   ></Column>
                    </DataTable>
                </div>
        </TabPanel>
</TabView>
</Dialog>
);
};
export default View;
