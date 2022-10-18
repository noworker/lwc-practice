import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class Notifications extends LightningElement {
    toastHandler() {
        this.showToast("Success!!", "{0}Account Createio Success {1}", "success")
    }

    toastHandlerTwo() {
        this.showToast("Error!!", "Account Createion Failed", "error")
    }

    toastHandlerThree() {
        this.showToast("Warning!!", "Account Createion Failed", "warning")
    }

    toastHandlerFour() {
        this.showToast("Info!!", "Account Createion Failed", "info")
    }

    showToast(title, message, variant ) {
        const event =  new ShowToastEvent({
            title,
            message,
            variant,
            messageData: [
                "salesforce", {
                    url: 'http://www.salesforce.com/',
                    label: 'salesforce.com'
                }
            ],
            mode: 'sticky' 
        })
        this.dispatchEvent(event)
    }
}