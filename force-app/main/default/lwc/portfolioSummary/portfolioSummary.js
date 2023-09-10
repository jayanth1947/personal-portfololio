import { LightningElement,api } from 'lwc';

export default class PortfolioSummary extends LightningElement {

    // Expose the 'recordId' property as an API property to receive a record's ID
    @api recordId;
    // Expose the 'objectApiName' property as an API property to receive an object's API name
    @api objectApiName;
}