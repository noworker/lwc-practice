import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigatetoWebPage extends NavigationMixin(LightningElement) {
    navigateToWeb() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://java-drive-4470-dev-ed--c.vf.force.com/apex/lmsVisualForceDemo'
            }
        })
    }

}