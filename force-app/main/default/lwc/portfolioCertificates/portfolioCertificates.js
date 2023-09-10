import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import SALESFORCE_CERT_FIELDS from '@salesforce/schema/Portfolio__c.SalesforceCertification__c';
import OTHER_CERT_FIELDS from '@salesforce/schema/Portfolio__c.OtherCertifications__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioCertificates extends LightningElement {

    // Initialize arrays to store Salesforce and other certifications
    sfCertList=[]
    otherCertList=[]

    // Define the certification logo URL using Salesforce Static Resources
    certLogo=`${PortfolioAssets}/PortfolioAssets/cert_logo.png`
    
    // Expose component properties as API properties to allow customization in the Lightning App Builder
    @api recordId

    // Wire service to fetch record data based on the provided recordId and specified fields
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SALESFORCE_CERT_FIELDS,OTHER_CERT_FIELDS]
    })certsHandler({data,error}){
        if(data){
            //console.log('Certification Data',JSON.stringify(data))
            this.formatData(data);
        }
        if(error){
            console.error('Certification Error',error);
        }
    }


    // Method to format and organize certification data
    formatData(data){
      const{SalesforceCertification__c ,OtherCertifications__c}= data.fields  

      // Split Salesforce certifications and format them
      this.sfCertList=SalesforceCertification__c ? SalesforceCertification__c.value.split(';').map(item=>{
        return `Salesforce Certified ${item}`
      }):[]

      // Split other certifications
      this.otherCertList= OtherCertifications__c ? OtherCertifications__c.value.split(','):[]
    
    }
}