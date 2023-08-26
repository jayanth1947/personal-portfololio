import { LightningElement, wire,api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANYLOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c';
import COMPANYNAME from '@salesforce/schema/Portfolio__c.CompanyName__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';

export default class PortfolioBanner extends LightningElement {

     @api recordId //='a0s5h000001uIjWAAU';
     @api linkedinUrl //= 'https://www.linkedin.com/in/onteru-jayanth'
     @api twitterUrl //= 'https://twitter.com/karkra_nikhil'
     @api githubUrl //='https://github.com/jayanth1947';
     @api youtubeUrl //= 'https://youtube.com/salesforcetroop'
     @api trailheadUrl //='https://www.salesforce.com/trailblazer/jonteru';

    userPic=`${PortfolioAssets}/PortfolioAssets/userPic.jpeg`
    linkedin =`${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
    github =`${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    trailhead =`${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`

    
    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME,COMPANYLOCATION,COMPANYNAME,DESIGNATION]})

    portfolioData
    // portfolioHandler({data,error}){
    //     if(data){
    //         console.log("record Data",JSON.stringify(data));
    //     }
    //     if (error) {
    //         console.error("error",error);
    //     }
    // }


    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }

    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANYLOCATION)
    }

    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANYNAME)
    }

    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }

    

}