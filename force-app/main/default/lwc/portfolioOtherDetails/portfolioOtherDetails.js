import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.SuperBadges__c';
import AWARDS_FIELD from '@salesforce/schema/Portfolio__c.Awards__c';
import LANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.Languages__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioOtherDetails extends LightningElement {

    superBadges=[]
    awards=[]
    languages=[]
    
    awardIcon=`${PortfolioAssets}/PortfolioAssets/trophy.png`
    languageIcon=`${PortfolioAssets}/PortfolioAssets/language.png`
    badgeIcon=`${PortfolioAssets}/PortfolioAssets/badge.png`
    @api recordId

    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SUPERBADGE_FIELD,AWARDS_FIELD,LANGUAGES_FIELD]
    })otherDetailsHandler({data,error}){
        if (data) {
            console.log("Other Details",JSON.stringify(data));
            this.formattedData(data)
        }
        if (error) {
            console.error("Error",error);
        }
    }

    formattedData(data){
        const {Awards__c,Languages__c,SuperBadges__c}= data.fields
        this.awards=Awards__c && Awards__c.value ? Awards__c.value.split(','):[]
        this.languages=Languages__c && Languages__c.value ? Languages__c.value.split(','):[]
        this.superBadges=SuperBadges__c && SuperBadges__c.value ? SuperBadges__c.value.split(';'):[]
    }
}