import { UserService } from '../shared/user.service'
import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    selector: 'app-home',
    template: `
        <div class="jumbotron">
            <span class="text-center">
                <app-kenteken (keyup)="handle($event)"></app-kenteken>
            </span>
        </div>
    `
})
export class HomeComponent {

    constructor(private router: Router, private userService: UserService) {
        this.userService.setUser("testHurrDurr")
    }
    
    handle(e: KeyboardEvent) {
        if(e.key === 'Enter') {
            this.router.navigate(['car', 'test'])
        }
    }
}