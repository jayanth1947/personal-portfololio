import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.SuperBadges__c';
import AWARDS_FIELD from '@salesforce/schema/Portfolio__c.Awards__c';
import LANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.Languages__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioOtherDetails extends LightningElement {

    // Initialize arrays to store Super Badges, Awards, and Languages
    superBadges=[]
    awards=[]
    languages=[]
    
    // Define URLs for icons using Salesforce Static Resources
    awardIcon=`${PortfolioAssets}/PortfolioAssets/trophy.png`
    languageIcon=`${PortfolioAssets}/PortfolioAssets/language.png`
    badgeIcon=`${PortfolioAssets}/PortfolioAssets/badge.png`

    // Expose the component's recordId property as an API property
    @api recordId

    // Wire service to fetch record data based on the provided recordId and specified fields
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SUPERBADGE_FIELD,AWARDS_FIELD,LANGUAGES_FIELD]
    })otherDetailsHandler({data,error}){
        if (data) {
            //console.log("Other Details",JSON.stringify(data));
            // Call a method to format the fetched data
            this.formattedData(data)
        }
        if (error) {
            console.error("Error",error);
        }
    }

    // Method to format and organize other details data (Super Badges, Awards, Languages)
    formattedData(data){
        const {Awards__c,Languages__c,SuperBadges__c}= data.fields

        // Split and store Awards, Languages, and Super Badges if they exist
        this.awards=Awards__c && Awards__c.value ? Awards__c.value.split(','):[]
        this.languages=Languages__c && Languages__c.value ? Languages__c.value.split(','):[]
        this.superBadges=SuperBadges__c && SuperBadges__c.value ? SuperBadges__c.value.split(';'):[]
    }
}