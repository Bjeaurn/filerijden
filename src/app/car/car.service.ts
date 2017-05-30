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
        return Observable.of(new Car(id, "Kia Picanto"))
    }
}