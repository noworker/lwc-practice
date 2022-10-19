import { LightningElement,wire } from 'lwc';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPickListValuesDemo extends LightningElement {
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo

    // first
    @wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD})
    industryPicklist({data, error}) {
        if(data){
            console.log('--------------')
            console.log(data)
            console.log('--------------')
            this.industryOptions = [...this.generatePicklist(data)]
        }
        if(error) {
            console.log('--------------')
            console.error(error)
            console.log('--------------')
        }
    }
    // second
    @wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: TYPE_FIELD})
    typePicklist({data, error}) {
        if(data){
            console.log('--------------')
            console.log(data)
            console.log('--------------')
            this.typeOptions = [...this.generatePicklist(data)]
        }
        if(error) {
            console.log('--------------')
            console.error(error)
            console.log('--------------')
        }
    }

    generatePicklist(data) {
        return data.values.map(item => (
            {
                label: item.label,
                value: item.value
            }
        ))
    }

    typeOptions
    selectedType
    handleTypeChange(event) {
        this.selectedType = event.detail.value
    }

    selectedIndustry = ''
    industryOptions = []
    // get () {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }

    generatePicklist(data) {
        return data.values.map(item =>(
            {
                label: item.label,
                value: item.value
            }
        ))
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
}