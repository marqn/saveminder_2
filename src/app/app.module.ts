import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {AppNavigation} from "./app.navigation";
import {AppContainer} from "./app.container";
import {AppFooter} from "./app.footer";
import {AppLearn} from "./app.learn";
import {AppManager} from "./app.manager";
import {AppGame} from "./app.game";
import {MaterializeModule} from "angular2-materialize";

const appRoutes = [
  {
    path: '#/learn',
    component: AppLearn
  },
  {
    path: '#/word-manager',
    component: AppManager
  },
  {
    path: '#/game',
    component: AppGame
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AppNavigation,
    AppContainer,
    AppFooter,
    AppLearn,
    AppManager,
    AppGame
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
