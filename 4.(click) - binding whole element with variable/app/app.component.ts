import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';


@Component({
    selector: 'my-app',

    template:

    `
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" #email>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" #password>
        </div>
        
        
        <button type="submit" class="btn btn-default"    (click)="aSimpleFunction(email , password)  ">Submit</button>
    </form>
    
     `,

    directives: [NgFor]
})




export class AppComponent {
    names: string[];

    constructor() {
        this.names = ['inzi', 'rehan', 'hassan', 'amna'];
    }
    
    aSimpleFunction( email: HTMLInputElement , password: HTMLInputElement ):void{
        
        console.log(`you entered email and password as follow:  ${email.value} , ${password.value}`);
    }
    
    
    
}