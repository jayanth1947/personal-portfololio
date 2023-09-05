import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import TECH_SKILLS from '@salesforce/schema/Portfolio__c.TechnicalSkills__c';
import SOFTWARE_SKILLS from '@salesforce/schema/Portfolio__c.SoftwareTools__c';
import SOFT_SKILLS from '@salesforce/schema/Portfolio__c.SoftSkills__c';
import METHODOLOGIES_SKILLS from '@salesforce/schema/Portfolio__c.DevelopmentMethodologies__c';
export default class PortfolioSkills extends LightningElement {
    @api recordId

    techSkills=[]
    softSkills=[]
    methodlogySkills=[]
    softwareSkills=[]
    @wire(getRecord,{
        recordId:"$recordId",
        fields:[TECH_SKILLS,SOFTWARE_SKILLS,SOFT_SKILLS,METHODOLOGIES_SKILLS]
    })skillsHandler({data,error}){
        if(data){
            console.log("Skill Data",JSON.stringify(data));
            this.formatSkills(data)
        }
        if(error){
            console.error("Skills error",error);
        }
    }

    formatSkills(data){
        const {TechnicalSkills__c,SoftSkills__c,DevelopmentMethodologies__c,SoftwareTools__c}=data.fields
        this.techSkills=TechnicalSkills__c ? TechnicalSkills__c.value.split(','):[]
        this.softSkills=SoftSkills__c ? SoftSkills__c.value.split(','):[]
        this.methodlogySkills=DevelopmentMethodologies__c ? DevelopmentMethodologies__c.value.split(','):[]
        this.softwareSkills=SoftwareTools__c ? SoftwareTools__c.value.split(','):[]
    }
}