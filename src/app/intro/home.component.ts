import {Component} from '@angular/core'

@Component({
    selector: 'app-home',
    template: `
        <div class="jumbotron">
            <span class="text-center">
                <app-kenteken></app-kenteken>
            </span>
        </div>
    `
})
export class HomeComponent {}