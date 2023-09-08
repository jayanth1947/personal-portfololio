import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import SALESFORCE_CERT_FIELDS from '@salesforce/schema/Portfolio__c.SalesforceCertification__c';
import OTHER_CERT_FIELDS from '@salesforce/schema/Portfolio__c.OtherCertifications__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioCertificates extends LightningElement {

    sfCertList=[]
    otherCertList=[]
    certLogo=`${PortfolioAssets}/PortfolioAssets/cert_logo.png`
    @api recordId

    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SALESFORCE_CERT_FIELDS,OTHER_CERT_FIELDS]
    })certsHandler({data,error}){
        if(data){
            console.log('Certification Data',JSON.stringify(data))
            this.formatData(data);
        }

        if(error){
            console.error('Certification Error',error);
        }
    }


    formatData(data){
      const{SalesforceCertification__c ,OtherCertifications__c}= data.fields  
      this.sfCertList=SalesforceCertification__c ? SalesforceCertification__c.value.split(';').map(item=>{
        return `Salesforce Certified ${item}`
      }):[]

      this.otherCertList= OtherCertifications__c ? OtherCertifications__c.value.split(','):[]
    
    }
}