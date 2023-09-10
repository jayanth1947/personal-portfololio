import { LightningElement,api } from 'lwc';

export default class PortfoliotabsWrapper extends LightningElement {

    // The unique record identifier passed to this component
    @api recordId=""
    // The API name of the object associated with the record
    @api objectApiName=""
}