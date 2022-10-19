import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'

const FIELDS = [NAME_FIELD, EMAIL_FIELD]

export default class WireDemoUserDetail extends LightningElement {
    userId = Id
    // 005N000000CDNxmIAH 
    userDetail

    @wire(getRecord, {recordId: '$userId', fields: FIELDS})
    userDetailHandler({data, error}) {
        if(data) {
            this.userDetail = data.fields
        }
        if(error) {
            console.error(error)
        }
    }

    @wire(getRecord, {recordId: '$userId', fields: FIELDS})
    userDetailProperty


}