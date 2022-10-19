import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLwc extends NavigationMixin(LightningElement) {
    navigateToLwc() {
        var definiation = {
            componentDef: 'c:navigationLwcTarget',
            attributes: {
                recordId: '76767684479857'
            }
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#'+ btoa(JSON.stringify(definiation))
            }
        })
    }
}