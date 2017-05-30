import { UserService } from '../shared/user.service'
import {Component} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs/Observable'
import {CAR_URL_ID, Car} from './car'
import { CarService } from "app/car/car.service"

@Component({
    selector: 'app-car',
    template: `
        <div>Car: {{ car | async | json}}</div>
    `
})
export class CarComponent {
    private car: Observable<Car>

    constructor(private activatedRoute: ActivatedRoute, private carService: CarService, private userService: UserService) {
        if(!this.userService.isLoggedIn()) {
            alert("You are not logged in.")
        }
        console.log(this.userService.getUser())
        this.car = this.carService.getById(this.activatedRoute.snapshot.params[CAR_URL_ID])
    }
}