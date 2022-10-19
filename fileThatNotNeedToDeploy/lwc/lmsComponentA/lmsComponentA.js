import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    receivedMessage
    subscription

    @wire(MessageContext)
    context;

    connectedCallback() {
        this.subscribeMessage();
    }

    subscribeMessage() {
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => this.handleMessage(message), {scope: APPLICATION_SCOPE})
    }

    handleMessage(message) {
        this.receivedMessage = message.lmsData ? message.lmsData.value : "No Message Published" 
    }

    unsbscribeMessage() {
        unsubscribe(this.subscription)
        console.log('unsbscribe!!!');
        this.subscription = null
    }
}