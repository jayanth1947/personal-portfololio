import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
import { LightningElement, api, wire } from 'lwc';

// Define columns for the data table
const COLUMNS= [
    { label: 'Education', fieldName: 'Education' },
    { label: 'Institute Name', fieldName: 'InstituteName'},
    { label: 'Passing Year', fieldName: 'PassingYear' }
    
];

export default class PortfolioEducation extends LightningElement {

    // Expose the component's recordId property as an API property
    @api recordId

    // Initialize arrays and columns for the data table
    tableData=[]
    columns=COLUMNS

    // Wire service to fetch related list records (Education) based on the provided parentRecordId
    @wire(getRelatedListRecords,{
        parentRecordId:"$recordId",
        relatedListId:"Educations__r",
        fields:['Education__c.InstitueName__c','Education__c.Title__c','Education__c.Passing_Year__c'],
        sortBy:['Education__c.Passing_Year__c']
    })EducationHandler({data,error}){
        if(data){
            //console.log("Education Data",JSON.stringify(data));
            // Call a method to format the fetched data
            this.formattedData(data);
        }
        if(error){
            console.error("Education Error",error);
        }
    }

     // Method to format and organize education data
    formattedData(data){

        // Create an array of formatted education data by reversing the records and mapping them
        this.tableData=[...data.records].reverse().map(item=>{

            // Extract the record's Id
            let Id=item.id

            // Destructure the fields object to extract specific field values
            const {InstitueName__c,Passing_Year__c,Title__c}=item.fields

            // Extract and store values from fields
            let Education=Title__c.value
            let InstituteName=InstitueName__c.value
            let PassingYear=Passing_Year__c.value

            // Create an object with formatted data and return it
            return {
                Id,Education,InstituteName,PassingYear
            }

        })

        //console.log("This.Table Data",JSON.stringify(this.tableData));
    }
}