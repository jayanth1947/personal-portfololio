import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioUserStats extends LightningElement {

    // Property to store the Trailhead ranking image URL
     trailheadRanking

     // Properties to receive data from the parent component
     @api badges
     @api points
     @api trails
     @api rank

     // Callback method called when the component is rendered
     renderedCallback(){
        // Check if the 'rank' property has a value
        if(this.rank){
            // Construct the URL for the Trailhead ranking image based on the 'rank'
            let url=`${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`
             // Assign the constructed URL to the 'trailheadRanking' property
            this.trailheadRanking=url
        }
     }
}