import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadScript, loadStyle} from 'lightning/platformResourceLoader' 
export default class ThirdPartyFiles extends LightningElement {
    currentDate
    isLibLoaded = false
    renderedCallback() {
        if(this.isLibLoaded) {
            return 
        } else {
            Promise.all([
                loadStyle(this, ANIMATE+'/animate/animate.min.css'),
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ]).then(() => {
                this.setDataOnScreen()
            })
            this.isLibLoaded = true
        }
    }
    setDataOnScreen() {
        this.currentDate = moment().format('LLLL')
    }
}