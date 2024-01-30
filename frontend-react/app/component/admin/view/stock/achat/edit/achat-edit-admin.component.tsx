import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import {Dropdown, DropdownChangeEvent} from 'primereact/dropdown';
import {TabView, TabPanel} from 'primereact/tabview';
import {DataTable} from 'primereact/datatable';
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



import {AchatAdminService} from 'app/controller/service/admin/stock/AchatAdminService.service';
import  {AchatDto}  from 'app/controller/model/stock/Achat.model';
import {AchatCriteria} from "app/controller/criteria/stock/AchatCriteria.model";

import {TFunction} from "i18next";
import {Toast} from "primereact/toast";

import {ClientDto} from 'app/controller/model/commun/Client.model';
import {ClientAdminService} from 'app/controller/service/admin/commun/ClientAdminService.service';
import {AchatItemDto} from 'app/controller/model/stock/AchatItem.model';
import {AchatItemAdminService} from 'app/controller/service/admin/stock/AchatItemAdminService.service';
import {ProduitDto} from 'app/controller/model/commun/Produit.model';
import {ProduitAdminService} from 'app/controller/service/admin/commun/ProduitAdminService.service';
import useEditHook from "app/component/zyhook/useEdit.hook";


type AchatEditAdminType = {
    visible: boolean,
    onClose: () => void,
    showToast: React.Ref<Toast>,
    selectedItem: AchatDto
    update: (item: AchatDto) => void,
    list: AchatDto[],
    service: AchatAdminService,
    t: TFunction
}
const Edit: React.FC<AchatEditAdminType> = ({visible, onClose, showToast, selectedItem, update, list, service, t}) => {


    const isFormValid = () => {
    let errorMessages = new Array<string>();
        if(item.reference == '')
            errorMessages.push("reference is required")
        return errorMessages.length == 0 ;
    }
    const emptyItem = new AchatDto();


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
        } = useEditHook<AchatDto, AchatCriteria>({list, selectedItem, onClose, update, showToast,service, t, isFormValid})

    const [produits, setProduits] = useState<ProduitDto[]>([]);
    const [clients, setClients] = useState<ClientDto[]>([]);

    const [achatItems, setAchatItems] = useState<AchatItemDto>(new AchatItemDto());

    const clientAdminService = new ClientAdminService();
    const achatItemAdminService = new AchatItemAdminService();
    const produitAdminService = new ProduitAdminService();
    useEffect(() => {
    clientAdminService.getList().then(({data}) => setClients(data)).catch(error => console.log(error));


    produitAdminService.getList().then(({data}) => setProduits(data)).catch(error => console.log(error));

        }, []);






    const addAchatItems = () => {
        setSubmitted(true);
        if( item.achatItems == null )
        item.achatItems = new Array<AchatItemDto>();
        let _item = achatItems;
        if (!_item.id) {
            item.achatItems.push(_item);
            MessageService.showSuccess(showToast, 'AchatItems Created');
            setItem((prevState :any) => ({...prevState, achatItems: item.achatItems }));
        } else {
            const updatedItems = item.achatItems.map((item) => item.id === achatItems.id ? {...achatItems} : item);
            MessageService.showSuccess(showToast, 'AchatItems Updated');
            setItem((prevState :any) => ({ ...prevState, achatItems: updatedItems}));
        }
        setAchatItems(new AchatItemDto());
    };

    const deleteAchatItems = (rowData: any) => {
        const updatedItems = item.achatItems.filter((val) => val !== rowData);
        setItem((prevState ) => ({...prevState as any, achatItems: updatedItems }));
        setAchatItems(new AchatItemDto());
        MessageService.showSuccess(showToast, 'AchatItem Deleted');
    };

    const editAchatItems = (rowData: any) => {
        setActiveTab(0);
        setAchatItems(rowData);
    };

    const onInputNumerChangeAchatItems = (e: any, name: string) => {
        const val = e.value || 0;
        setAchatItems((prevAchatItems) => ({ ...prevAchatItems  as any, [name]: val, }));
    };

    const onDropdownChangeAchatItems = (e: any, field: string) => {
        setAchatItems((prevState) => ({ ...prevState  as any, [field]: e.value}));
    };


    const onMultiSelectChangeAchatItems = (e: any, field: string) => {
        if (e && e.value && Array.isArray(e.value)) {
            const selectedValues = e.value.map((option  : any) => option && option.value);
            setAchatItems(prevState => ({ ...prevState as any, [field]: selectedValues, }));
        }
    };

    const onBooleanInputChangeAchatItems = (e: any, name: string) => {
        const val = e.value;
        setAchatItems((prevItem) => ({ ...prevItem as any, [name]: val, }));
    };

    const onInputDateChangeAchatItems = (e: CalendarChangeEvent, name: string) => {
        const val = e.value || '';
        setAchatItems({ ...achatItems  as any, [name]:val})
    };

    const onInputTextChangeAchatItems = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        setAchatItems({ ...achatItems  as any, [name]:val})
    };

    const itemDialogFooter = ( <>
        <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog} />
        <Button label="Save" icon="pi pi-check" onClick={editItem} /> </>
    );



    return(
    <Dialog visible={visible} style={{width: '70vw'}} header={t("achat.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog}>
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header={t("achat.tabPan")}>
                <div className="formgrid grid">
                    <div className="field col-6">
                        <label htmlFor="reference">{t("achat.reference")}</label>
                        <InputText id="reference" value={item ? item.reference : ''} onChange={(e) => onInputTextChange(e, 'reference')} required className={classNames({'p-invalid': submitted && !item.reference})} />
                        {submitted && !item.reference && <small className="p-invalid">Reference is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="dateAchat">{t("achat.dateAchat")}</label>
                        <Calendar id="dateAchat" value={adaptDate(item?.dateAchat)} onChange={(e) => onInputDateChange(e, 'dateAchat')} dateFormat="dd/mm/yy" showIcon={true} />
                    </div>
                    <div className="field col-6">
                        <label htmlFor="total">{t("achat.total")}</label>
                        <InputNumber id="total" value={item ? item.total : 0} onChange={(e) => onInputNumerChange(e, 'total')}/>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="totalPaye">{t("achat.totalPaye")}</label>
                        <InputNumber id="totalPaye" value={item ? item.totalPaye : 0} onChange={(e) => onInputNumerChange(e, 'totalPaye')}/>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="description">{t("achat.description")}</label>
                        <span className="p-float-label">
                            <InputTextarea id="description" value={item ? item.description : ''} onChange={(e) => onInputTextChange(e, 'description')} rows={5} cols={30}/>
                        </span>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="client">{t("achat.client")}</label>
                        <Dropdown  id="clientDropdown"  value={item ? item.client : ''} options={clients} onChange={(e) => onDropdownChange(e, 'client')}   placeholder="Sélectionnez un client" filter filterPlaceholder="Rechercher un client" optionLabel="nom" showClear />
                    </div>
                </div>
            </TabPanel>
        </TabView>
    </Dialog>
);
};
export default Edit;


