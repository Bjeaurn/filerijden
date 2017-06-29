import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {HttpClient} from '../shared/http.client'

import { Driver } from '../driver/driver'
import { Car } from './car'

interface ICarService {
    getById(id: string): Observable<Car>
}

@Injectable()
export class CarService implements ICarService {
    
    constructor(private http: HttpClient) {}

    getById(id: string): Observable<Car> {
        return this.http.get('http://localhost:9000/api/')
            .map(res => <Car>res.json())
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