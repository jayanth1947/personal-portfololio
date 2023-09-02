import { LightningElement,api,wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {

    @api recordId;

    @wire(getRelatedListRecords,{
       parentRecordId:'$recordId',
       relatedListId:'WorkExperience__r',
       fields:['Work_Experience__c.CompanyName__c',
       'Work_Experience__c.Description__c',
       'Work_Experience__c.Is_Current__c',
       'Work_Experience__c.JobStartDate__c',
       'Work_Experience__c.JobEndDate__c',
       'Work_Experience__c.Role__c',
       'Work_Experience__c.WorkLocation__c'
    ] 
    })workExperienceHandler({data,error}){
        if(data){
            console.log("Work Experience Data",JSON.stringify(data));
        }
        if(error){
            console.error(error);
        }
    }
}