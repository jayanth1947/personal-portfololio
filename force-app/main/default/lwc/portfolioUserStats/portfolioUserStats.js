import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioUserStats extends LightningElement {

     trailheadRanking
     @api badges
     @api points
     @api trails
     @api rank

     renderedCallback(){
        if(this.rank){
            let url=`${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`
            this.trailheadRanking=url
        }
     }
}