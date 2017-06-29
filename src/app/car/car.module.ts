import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { CarComponent } from './car.component'
import { CarService, MockCarService } from './car.service'

const carRoutes: Routes = [
    { path: 'car/:id', component: CarComponent },
]

@NgModule({
    declarations: [
        CarComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forRoot(carRoutes)
    ],
    exports: [],
    providers: [
        { provide: CarService, useClass: CarService }
    ]
})
export class CarModule {}