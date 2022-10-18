import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
export default class CurrentReferece extends LightningElement {
    @wire(CurrentPageReference)
    pageRef

    get CurrentPageReference() {
        return this.pageRef ? JSON.stringify(this.pageRef) : 'aaa'
    }
}