import { LightningElement, wire,api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import userPic from '@salesforce/resourceUrl/userPic';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANYLOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c';
import COMPANYNAME from '@salesforce/schema/Portfolio__c.CompanyName__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';

export default class PortfolioBanner extends LightningElement {

    // Expose component properties as API properties to allow customization in the Lightning App Builder
     @api recordId //='a0s5h000001uIjWAAU';
     @api linkedinUrl //= 'https://www.linkedin.com/in/onteru-jayanth'
     @api twitterUrl //= 'https://twitter.com/onteru-jayanth'
     @api githubUrl //='https://github.com/jayanth1947';
     @api youtubeUrl //= 'https://youtube.com/jayanth-onteru'
     @api trailheadUrl //='https://www.salesforce.com/trailblazer/jonteru';


    // Define image URLs using Salesforce Static Resources
    //userPic=`${PortfolioAssets}/PortfolioAssets/userPic.jpeg`
    userPicMain=`${userPic}/userPic.png`
    linkedin =`${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
    github =`${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    trailhead =`${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`

    // Wire service to fetch record data based on the provided recordId and specified fields
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


    // Getter methods to retrieve specific field values from the fetched record data
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