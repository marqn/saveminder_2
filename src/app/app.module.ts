import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {MaterializeModule} from "angular2-materialize";

import {AppComponent} from "./app.component";
import {AppNavigation} from "./app.navigation";
import {AppContainer} from "./app.container";
import {AppFooter} from "./app.footer";
import {AppLearn} from "./app.learn";
import {AppManager} from "./app.manager";
import {AppGame} from "./app.game";
import {Wordlist} from "./app.wordlist";
import {WordComponent} from "./app.word.component";

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
  },
  {
    path: '#/wordlist',
    component: Wordlist
  },
  {
    path: '#/edit',
    component: WordComponent
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
    AppGame,
    Wordlist,
    WordComponent
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
