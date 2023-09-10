
import { LightningElement, api } from 'lwc';

export default class PortfolioStringHtml extends LightningElement {

    // Expose the 'content' property as an API property to receive HTML content
    @api content

    // Expose the 'content' property as an API property to receive HTML content
    isLoaded=false

    // Callback method executed when the component is rendered
    renderedCallback(){
        // Check if the content has already been loaded to avoid multiple renderings
        if(this.isLoaded){
            return false  // Exit the method if content has already been loaded
        }

        if(this.content){
            this.isLoaded=true // Mark content as loaded 
            const container =this.template.querySelector('.htmlContainer')  // Find the HTML container element in the template
            container.innerHTML=this.content // Set the inner HTML of the container with the provided 'content'

        }
    }
}