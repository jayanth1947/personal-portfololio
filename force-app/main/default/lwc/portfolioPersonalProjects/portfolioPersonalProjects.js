import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioPersonalProjects extends LightningElement {

    // Define resource URLs for project images using PortfolioAssets
    BMICalculator= `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock= `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator= `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp= `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    SurveyApp= `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`

    // Define an array of project objects, each with a name, image, and link
    projects=[
        {
            "name" :"BMI Calculator App",
            "img" : this.BMICalculator,
            "link": "https://empathetic-goat-jgrtil-dev-ed.my.site.com/bmicalculator"
        },
        {
            "name" :"Alarm App",
            "img" : this.AlarmClock,
            "link": "https://empathetic-goat-jgrtil-dev-ed.my.site.com/alarmClock"
        },
        {
            "name" :"Currency Converter App",
            "img" : this.CurrencyCalculator,
            "link": "https://empathetic-goat-jgrtil-dev-ed.my.site.com/currency-converter"
        },
        {
            "name" :"Weather App",
            "img" : this.WeatherApp,
            "link": "https://empathetic-goat-jgrtil-dev-ed.my.site.com/weatherApplication"
        },
        
        {
            "name" :"Survey App",
            "img" : this.SurveyApp,
            "link": "https://empathetic-goat-jgrtil-dev-ed.my.site.com/employeeSurvey/survey/runtimeApp.app?invitationId=0Ki5h000000alhI&surveyName=employee_survey&UUID=6751f0a5-a9a0-4539-bfc7-08338d8bbee0"
        }

    ]
}