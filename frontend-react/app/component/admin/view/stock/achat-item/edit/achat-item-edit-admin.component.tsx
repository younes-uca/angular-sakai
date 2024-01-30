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



import {AchatItemAdminService} from 'app/controller/service/admin/stock/AchatItemAdminService.service';
import  {AchatItemDto}  from 'app/controller/model/stock/AchatItem.model';
import {AchatItemCriteria} from "app/controller/criteria/stock/AchatItemCriteria.model";

import {TFunction} from "i18next";
import {Toast} from "primereact/toast";

import {AchatDto} from 'app/controller/model/stock/Achat.model';
import {AchatAdminService} from 'app/controller/service/admin/stock/AchatAdminService.service';
import {ProduitDto} from 'app/controller/model/commun/Produit.model';
import {ProduitAdminService} from 'app/controller/service/admin/commun/ProduitAdminService.service';
import useEditHook from "app/component/zyhook/useEdit.hook";


type AchatItemEditAdminType = {
    visible: boolean,
    onClose: () => void,
    showToast: React.Ref<Toast>,
    selectedItem: AchatItemDto
    update: (item: AchatItemDto) => void,
    list: AchatItemDto[],
    service: AchatItemAdminService,
    t: TFunction
}
const Edit: React.FC<AchatItemEditAdminType> = ({visible, onClose, showToast, selectedItem, update, list, service, t}) => {


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
        onDropdownChange,
        onTabChange,
        hideDialog,
        editItem,
        formateDate,
        parseToIsoFormat,
        adaptDate
        } = useEditHook<AchatItemDto, AchatItemCriteria>({list, selectedItem, onClose, update, showToast,service, t, isFormValid})

    const [produits, setProduits] = useState<ProduitDto[]>([]);
    const [achats, setAchats] = useState<AchatDto[]>([]);


    const achatAdminService = new AchatAdminService();
    const produitAdminService = new ProduitAdminService();
    useEffect(() => {
    produitAdminService.getList().then(({data}) => setProduits(data)).catch(error => console.log(error));
    achatAdminService.getList().then(({data}) => setAchats(data)).catch(error => console.log(error));


        }, []);







    const itemDialogFooter = ( <>
        <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog} />
        <Button label="Save" icon="pi pi-check" onClick={editItem} /> </>
    );



    return(
    <Dialog visible={visible} style={{width: '70vw'}} header={t("achatItem.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog}>
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header={t("achatItem.tabPan")}>
                <div className="formgrid grid">
                    <div className="field col-6">
                        <label htmlFor="produit">{t("achatItem.produit")}</label>
                        <Dropdown  id="produitDropdown"  value={item ? item.produit : ''} options={produits} onChange={(e) => onDropdownChange(e, 'produit')}   placeholder="Sélectionnez un produit" filter filterPlaceholder="Rechercher un produit" optionLabel="reference" showClear />
                    </div>
                    <div className="field col-6">
                        <label htmlFor="prixUnitaire">{t("achatItem.prixUnitaire")}</label>
                        <InputNumber id="prixUnitaire" value={item ? item.prixUnitaire : 0} onChange={(e) => onInputNumerChange(e, 'prixUnitaire')}/>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="prixVente">{t("achatItem.prixVente")}</label>
                        <InputNumber id="prixVente" value={item ? item.prixVente : 0} onChange={(e) => onInputNumerChange(e, 'prixVente')}/>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="quantite">{t("achatItem.quantite")}</label>
                        <InputNumber id="quantite" value={item ? item.quantite : 0} onChange={(e) => onInputNumerChange(e, 'quantite')}/>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="quantiteAvoir">{t("achatItem.quantiteAvoir")}</label>
                        <InputNumber id="quantiteAvoir" value={item ? item.quantiteAvoir : 0} onChange={(e) => onInputNumerChange(e, 'quantiteAvoir')}/>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="remise">{t("achatItem.remise")}</label>
                        <InputNumber id="remise" value={item ? item.remise : 0} onChange={(e) => onInputNumerChange(e, 'remise')}/>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="achat">{t("achatItem.achat")}</label>
                        <Dropdown  id="achatDropdown"  value={item ? item.achat : ''} options={achats} onChange={(e) => onDropdownChange(e, 'achat')}   placeholder="Sélectionnez un achat" filter filterPlaceholder="Rechercher un achat" optionLabel="reference" showClear />
                    </div>
                </div>
            </TabPanel>
        </TabView>
    </Dialog>
);
};
export default Edit;


