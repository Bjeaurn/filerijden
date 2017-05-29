import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from './shared/shared.module'
import { HttpClient } from './shared/http.client'
import { BaseModule } from './base/base.module'
import { HomeModule } from './intro/home.module'
import { PageNotFoundComponent } from "./shared/pagenotfound.component"

const appRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    BaseModule,
    HomeModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
