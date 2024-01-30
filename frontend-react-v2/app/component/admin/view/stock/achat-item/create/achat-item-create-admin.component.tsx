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

import {AchatItemAdminService} from 'app/controller/service/admin/stock/AchatItemAdminService.service';
import  {AchatItemDto}  from 'app/controller/model/stock/AchatItem.model';
import {AchatItemCriteria} from "app/controller/criteria/stock/AchatItemCriteria.model";

import {ProduitDto} from 'app/controller/model/commun/Produit.model';
import {ProduitAdminService} from 'app/controller/service/admin/commun/ProduitAdminService.service';
import {AchatDto} from 'app/controller/model/stock/Achat.model';
import {AchatAdminService} from 'app/controller/service/admin/stock/AchatAdminService.service';
import {TFunction} from "i18next";
import {Toast} from "primereact/toast";
import useCreateHook from "app/component/zyhook/useCreate.hook";



type AchatItemCreateAdminType = {
    visible: boolean,
    onClose: () => void,
    add: (item: AchatItemDto) => void,
    showToast: React.Ref<Toast>,
    list: AchatItemDto[],
    service: AchatItemAdminService,
    t: TFunction
}
const Create: React.FC<AchatItemCreateAdminType> = ({visible, onClose, add, showToast, list, service, t}) => {


    const isFormValid = () => {
    let errorMessages = new Array<string>();
                if(item.produit == null)
                    errorMessages.push("produit is required")
                if(item.prixUnitaire == null)
                    errorMessages.push("prixUnitaire is required")
                if(item.prixVente == null)
                    errorMessages.push("prixVente is required")
                if(item.quantite == null)
                    errorMessages.push("quantite is required")
        return errorMessages.length == 0 ;
    }
    const emptyItem = new AchatItemDto();
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
        } = useCreateHook<AchatItemDto, AchatItemCriteria>({list, emptyItem, onClose, add, showToast,service, isFormValid})
    const [produits, setProduits] = useState<ProduitDto[]>([]);
    const [achats, setAchats] = useState<AchatDto[]>([]);


    const produitAdminService = new ProduitAdminService();
    const achatAdminService = new AchatAdminService();
    useEffect(() => {
        produitAdminService.getList().then(({data}) => setProduits(data)).catch(error => console.log(error));
        achatAdminService.getList().then(({data}) => setAchats(data)).catch(error => console.log(error));
    }, []);








    const itemDialogFooter = ( <>
        <Button label={t("cancel")} icon="pi pi-times" text onClick={hideDialog} />
        <Button label={t("save")} icon="pi pi-check" onClick={saveItem} /> </>
    );

return(
        <Dialog visible={visible} style={{width: '70vw'}} header={t("achatItem.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header={t("achatItem.tabPan")}>
                <div className="formgrid grid">
                    <div className="field col-6">
                        <label htmlFor="produit">{t("achatItem.produit")}</label>
                        <Dropdown  id="produitDropdown"  value={item.produit} options={produits} onChange={(e) => onDropdownChange(e, 'produit')}   placeholder={t("achatItem.produitPlaceHolder")} filter filterPlaceholder={t("achatItem.produitPlaceHolderFilter")} optionLabel="reference" showClear/>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="prixUnitaire">{t("achatItem.prixUnitaire")}</label>
                        <InputNumber id="prixUnitaire" value={item.prixUnitaire} onChange={(e) => onInputNumerChange(e, 'prixUnitaire')} />
                    </div>
                    <div className="field col-6">
                        <label htmlFor="prixVente">{t("achatItem.prixVente")}</label>
                        <InputNumber id="prixVente" value={item.prixVente} onChange={(e) => onInputNumerChange(e, 'prixVente')} />
                    </div>
                    <div className="field col-6">
                        <label htmlFor="quantite">{t("achatItem.quantite")}</label>
                        <InputNumber id="quantite" value={item.quantite} onChange={(e) => onInputNumerChange(e, 'quantite')} />
                    </div>
                    <div className="field col-6">
                        <label htmlFor="quantiteAvoir">{t("achatItem.quantiteAvoir")}</label>
                        <InputNumber id="quantiteAvoir" value={item.quantiteAvoir} onChange={(e) => onInputNumerChange(e, 'quantiteAvoir')} />
                    </div>
                    <div className="field col-6">
                        <label htmlFor="remise">{t("achatItem.remise")}</label>
                        <InputNumber id="remise" value={item.remise} onChange={(e) => onInputNumerChange(e, 'remise')} />
                    </div>
                    <div className="field col-5">
                        <label htmlFor="achat">{t("achatItem.achat")}</label>
                        <Dropdown  id="achatDropdown"  value={item.achat} options={achats} onChange={(e) => onDropdownChange(e, 'achat')}   placeholder={t("achatItem.achatPlaceHolder")} filter filterPlaceholder={t("achatItem.achatPlaceHolderFilter")} optionLabel="reference" showClear/>
                    </div>
                </div>
            </TabPanel>
        </TabView>
    </Dialog>
);
};
export default Create;
