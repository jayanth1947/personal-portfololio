import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId
    @api objectApiName

    downloadResume(){
        window.open("https://github.com/jayanth1947/jayanth-resume/raw/main/JAYANTH_RESUME.pdf","_blank")
    }
}