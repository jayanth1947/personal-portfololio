import { LightningElement,api,wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {

    @api recordId;

    workExperienceList

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
            this.formattedData(data);
        }
        if(error){
            console.error(error);
        }
    }

    formattedData(data){
        this.workExperienceList=[...data.records].reverse().map(item=>{
            let id=item.id
            const {CompanyName__c,Description__c,Is_Current__c,JobStartDate__c
            ,JobEndDate__c,Role__c,WorkLocation__c} =item.fields

            let CompanyName=this.getValue(CompanyName__c)
            let Description=this.getValue(Description__c)
            let IsCurrent=this.getValue(Is_Current__c)
            let JobStartDate=this.getValue(JobStartDate__c)
            let JobEndDate=this.getValue(JobEndDate__c)
            let Role=this.getValue(Role__c)
            let WorkLocation=this.getValue(WorkLocation__c)

            return {id,CompanyName,Description,IsCurrent,JobStartDate,JobEndDate,Role,WorkLocation}
        })
        console.log("Work Experience ",JSON.stringify(this.workExperienceList));
    }

    getValue(data){
        return data && (data.displayValue || data.value)
    }
}