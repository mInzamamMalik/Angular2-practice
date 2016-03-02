import { Component } from 'angular2/core'
import { Article } from './app.redit'
import { NgFor, NgForm } from 'angular2/common'


@Component({
    selector: 'reddit',
    directives: [Article],
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

            <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">
                Submit link
            </button>
        </form>

        <div class="ui grid posts">
            <reddit-article *ngFor="#article of sortedArticles()" [article]="article">   </reddit-article>
        </div>
 `
})

export class ArticleComponent {

    articles: Article[];

    constructor() {
        this.articles = [new Article('', '', 0)];

    }
}
 

