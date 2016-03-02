import { Component } from 'angular2/core'
// import { Article } from './app.redit'
import { NgFor, NgForm } from 'angular2/common'


@Component({
    selector: 'reddit',
    // directives: [Article],
    template: `
    
        <form class="ui large form segment">
            <h3 class="ui header">Add a Link</h3>

            <div class="field">
                <label for="title">Title:</label>
                <input name="title" #newtitle>
            </div>
            
            <div class="field">
                <label for="link">Link:</label>
                <input name="link" #newlink>
            </div>

          
        </form>        
 `
})

export class ArticleComponent {   

    constructor() {
       

    }
}
 

