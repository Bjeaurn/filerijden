import { Driver } from '../driver/driver'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {Car} from './car'

interface ICarService {
    getById(id: string): Observable<Car>
}

@Injectable()
export class CarService implements ICarService {
    getById(id: string): Observable<Car> {
        return Observable.of()
    }
}

@Injectable()
export class MockCarService implements ICarService {
    getById(id: string): Observable<Car> {
        const result = new Car(id, "Kia Picanto")
        result.drivers = [new Driver("abcd", "Bjorn Schijff")]
        return Observable.of(result)
    }
}