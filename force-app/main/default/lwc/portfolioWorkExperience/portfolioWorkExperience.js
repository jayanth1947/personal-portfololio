import { LightningElement,api,wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {

    // Expose recordId property for the component's parent to set
    @api recordId;

    // Initialize an array to store the work experience records
    workExperienceList

    // Wire decorator to fetch related list records
    @wire(getRelatedListRecords,{
       parentRecordId:'$recordId',
       relatedListId:'WorkExperience__r',
       // Specify the fields to retrieve from the related list
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

     // Format the retrieved data into a usable format
    formattedData(data){

        // Reverse the order of records and map them to a new format
        this.workExperienceList=[...data.records].reverse().map(item=>{
            let id=item.id
            const {CompanyName__c,Description__c,Is_Current__c,JobStartDate__c
            ,JobEndDate__c,Role__c,WorkLocation__c} =item.fields

            // Extract and format individual field values
            let CompanyName=this.getValue(CompanyName__c)
            let Description=this.getValue(Description__c)
            let IsCurrent=this.getValue(Is_Current__c)
            let JobStartDate=this.getValue(JobStartDate__c)
            let JobEndDate=this.getValue(JobEndDate__c)
            let Role=this.getValue(Role__c)
            let WorkLocation=this.getValue(WorkLocation__c)

             // Return the formatted data for each record
            return {id,CompanyName,Description,IsCurrent,JobStartDate,JobEndDate,Role,WorkLocation}
        })
        //console.log("Work Experience ",JSON.stringify(this.workExperienceList));
    }

     // Helper function to get the display value or raw value from a field
    getValue(data){
        return data && (data.displayValue || data.value)
    }
}