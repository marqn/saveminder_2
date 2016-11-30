import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {MaterializeModule} from "angular2-materialize";

import {AppMain} from "./html/app.main.ts";
import {AppNavigation} from "./html/app.navigation.ts";
import {AppContainer} from "./html/app.container.ts";
import {AppFooter} from "./html/app.footer.ts";
import {AppLearn} from "./html/subpages/app.learn.ts";
import {AppManager} from "./html/subpages/app.manager.ts";
import {AppGame} from "./html/subpages/app.game.ts";
import {Wordlist} from "./html/subpages/app.wordlist.ts";
import {WordComponent} from "./html/subpages/app.word.component.ts";
import {Startpage} from "./html/subpages/app.startpage";
import {Loginpage} from "./html/subpages/app.loginpage";

const appRoutes = [
  {
    path: '#/startpage',
    component: Startpage
  },
  {
    path: '#/loginpage',
    component: Loginpage
  },
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
    Startpage,
    Loginpage,
    AppMain,
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
  bootstrap: [AppMain]
})
export class AppModule {
}
