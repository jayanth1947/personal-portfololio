import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioBanner extends LightningElement {

    linkedinUrl= 'https://www.linkedin.com/in/onteru-jayanth'
    githubUrl='https://github.com/jayanth1947';
    trailheadUrl='https://www.salesforce.com/trailblazer/jonteru';

    userPic=`${PortfolioAssets}/PortfolioAssets/userPic.jpeg`
    linkedin =`${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github =`${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    trailhead =`${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
}