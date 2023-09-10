import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetailAndStats extends LightningElement {

    // Exposing the properties to public
    @api recordId
    @api objectApiName
    @api rank
    @api badges
    @api points
    @api trails
    @api resumeUrl
}