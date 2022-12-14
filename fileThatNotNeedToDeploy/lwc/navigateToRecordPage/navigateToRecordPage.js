import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    recordViewMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003N000001vUQrfIAG',
                objectApiName: 'Contact',
                actionName: 'view'
            }
        })
    }
    recordEditMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003N000001vUQrfIAG',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        })
    }
}