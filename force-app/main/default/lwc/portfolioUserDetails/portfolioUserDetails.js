import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {

    // Expose the following properties to make them accessible in the parent component
    @api recordId
    @api objectApiName
    @api resumeUrl
    
    // Function to handle the downloadResume button click
    downloadResume(){
        // Open the resume URL in a new tab or window
        window.open(this.resumeUrl,"_blank")
    }
}