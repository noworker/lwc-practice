import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {
    handlerFooterChange() {
        const footerElems = this.template.querySelector('.slds-card__footer')
        if(footerElems) {
            footerElems.classList.remove('slds-hide')
        }
    }
}