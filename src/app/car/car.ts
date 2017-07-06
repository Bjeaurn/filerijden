import { Driver } from "app/driver/driver"

export const CAR_URL_ID = "id"
export const CAR_TYPE: string = "car"
export class Car {
    type: string = CAR_TYPE
    drivers: Driver[] = []
    constructor(private id: string, public name: string, public kenteken: string) {}
}