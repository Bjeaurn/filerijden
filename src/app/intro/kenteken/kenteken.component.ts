import {Component} from '@angular/core'

@Component({
    selector: 'app-kenteken',
    template: `
        <div>
            <input type="text" name="Kenteken" />
        </div>
    `,
    styles: [
        `input { padding: 10px; background: #FFCE00; border: 1px solid black; border-radius: 5px; border-left: 50px solid #0052A5; font-size: 2em; font-color: black; font-weight: bold; width: 260px; text-align: center; }`
    ]
})
export class KentekenComponent {}