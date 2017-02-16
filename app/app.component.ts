import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    message = "Hello Angular";
    users: User[] = [ 
        { id: 25, name: 'Preetam', username: 'Puny Gawd'},
        { id: 26, name: 'Prakash', username: 'Papa'},
        { id: 27, name: 'Prajwal', username: 'SecretSpirit'},      
    ];
    activeUser: User;

    selectUser(user){
        this.activeUser = user; 
        console.log(this.activeUser);  
    }
    onUserCreated(event){
        this.users.push(event.user);
    }
}