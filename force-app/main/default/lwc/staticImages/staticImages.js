import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import USER_WORKING from '@salesforce/resourceUrl/user_working'
export default class StaticImages extends LightningElement {
    userImage = USER_IMAGE
    userWorking = USER_WORKING

}