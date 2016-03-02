import {Component} from 'angular2/core'
import { NgFor, NgForm } from 'angular2/common'

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    template: `
 <div class="four wide column center aligned votes">
    <div class="ui statistic">

        <div class="value">
            {{ article.votes }}
        </div>

        <div class="label">
            Points
        </div>
    </div>
</div>

<div class="twelve wide column">
    <a class="ui large header" href="{{ article.link }}">
    {{ article.title }}
    </a>

    
    
    <ul class="ui big horizontal list voters">
        <li class="item">
            <a href (click)="voteUp()">
                <i class="arrow up icon"></i> upvote
            </a>
        </li>
        <li class="item">
            <a href (click)="voteDown()">
                <i class="arrow down icon"></i> downvote
            </a>
        </li>
    </ul>
</div>
 `
})


export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    domain(): string {
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (err) {
            return null;
        }
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }
}
