import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
import { LightningElement, api, wire } from 'lwc';


const COLUMNS= [
    { label: 'Education', fieldName: 'Education' },
    { label: 'Institute Name', fieldName: 'InstituteName'},
    { label: 'Passing Year', fieldName: 'PassingYear' }
    
];

export default class PortfolioEducation extends LightningElement {

    @api recordId

    tableData=[]
    columns=COLUMNS
    @wire(getRelatedListRecords,{
        parentRecordId:"$recordId",
        relatedListId:"Educations__r",
        fields:['Education__c.InstitueName__c','Education__c.Title__c','Education__c.Passing_Year__c'],
        sortBy:['Education__c.Passing_Year__c']
    })EducationHandler({data,error}){
        if(data){
            console.log("Education Data",JSON.stringify(data));
            this.formattedData(data);
        }
        if(error){
            console.error("Education Error",error);
        }
    }

    formattedData(data){
        this.tableData=[...data.records].reverse().map(item=>{
            let Id=item.id
            const {InstitueName__c,Passing_Year__c,Title__c}=item.fields
            let Education=Title__c.value
            let InstituteName=InstitueName__c.value
            let PassingYear=Passing_Year__c.value

            return {
                Id,Education,InstituteName,PassingYear
            }

        })

        console.log("This.Table Data",JSON.stringify(this.tableData));
    }
}