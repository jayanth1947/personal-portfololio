import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import TECH_SKILLS from '@salesforce/schema/Portfolio__c.TechnicalSkills__c';
import SOFTWARE_SKILLS from '@salesforce/schema/Portfolio__c.SoftwareTools__c';
import SOFT_SKILLS from '@salesforce/schema/Portfolio__c.SoftSkills__c';
import METHODOLOGIES_SKILLS from '@salesforce/schema/Portfolio__c.DevelopmentMethodologies__c';
export default class PortfolioSkills extends LightningElement {

    // The record Id passed to the component
    @api recordId

    // Initialize arrays to store skills data
    techSkills=[]
    softSkills=[]
    methodlogySkills=[]
    softwareSkills=[]


    // Wire the 'getRecord' function to retrieve skills data based on the recordId
    @wire(getRecord,{
        recordId:"$recordId",
        fields:[TECH_SKILLS,SOFTWARE_SKILLS,SOFT_SKILLS,METHODOLOGIES_SKILLS]
    })skillsHandler({data,error}){
        if(data){
            //console.log("Skill Data",JSON.stringify(data));
            // Call a method to format and store skills data
            this.formatSkills(data)
        }
        if(error){
            console.error("Skills error",error);
        }
    }

    // Method to format and store skills data
    formatSkills(data){
        const {TechnicalSkills__c,SoftSkills__c,DevelopmentMethodologies__c,SoftwareTools__c}=data.fields

        // Populate the arrays with skills data, splitting values by comma
        this.techSkills=TechnicalSkills__c ? TechnicalSkills__c.value.split(','):[]
        this.softSkills=SoftSkills__c ? SoftSkills__c.value.split(','):[]
        this.methodlogySkills=DevelopmentMethodologies__c ? DevelopmentMethodologies__c.value.split(','):[]
        this.softwareSkills=SoftwareTools__c ? SoftwareTools__c.value.split(','):[]
    }
}