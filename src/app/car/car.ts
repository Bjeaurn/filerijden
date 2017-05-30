export const CAR_URL_ID = "id"
export const CAR_TYPE: string = "car"
export class Car {
    type: string = CAR_TYPE

    constructor(private id: string) {}
}