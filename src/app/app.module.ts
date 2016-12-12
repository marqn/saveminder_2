import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {MaterializeModule} from "angular2-materialize";
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

import {AppMain} from "./html/app.main.ts";
import {AppNavigation} from "./html/navigation/app.navigation.ts";
import {AppContainer} from "./html/app.container.ts";
import {AppFooter} from "./html/app.footer.ts";
import {AppLearn} from "./html/subpages/learn/app.learn.ts";
import {CategoriesComponent} from "./html/subpages/categories/app.categories.ts";
import {AppGame} from "./html/subpages/app.game.ts";
import {Wordlist} from "./html/subpages/word_list/app.wordlist.ts";
import {EditComponent} from "./html/subpages/app.edit.ts";
import {Startpage} from "./html/subpages/app.startpage";
import {Loginpage} from "./html/subpages/login/app.loginpage.ts";
import {Signup} from "./html/subpages/login/app.signup";
import {CategoriesDataServices} from "./DataService";

const appRoutes = [
  {
    path: '',
    component: Startpage
  },
  {
    path: '#/startpage',
    component: Startpage
  },
  {
    path: '#/loginpage',
    component: Loginpage
  },
  {
    path: '#/signup',
    component: Signup
  },
  {
    path: '#/learn',
    component: AppLearn
  },
  {
    path: '#/word-manager',
    component: CategoriesComponent
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
    component: EditComponent
  }
];

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBMkJ2KFyRANZuyTnGJcBQBs3Uy3sxxkxI',
  authDomain: 'saveminder.firebaseapp.com',
  databaseURL: 'https://saveminder.firebaseio.com/',
  storageBucket: 'gs://saveminder.appspot.com'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    Startpage,
    Loginpage,
    Signup,
    AppMain,
    AppNavigation,
    AppContainer,
    AppFooter,
    AppLearn,
    CategoriesComponent,
    AppGame,
    Wordlist,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [CategoriesDataServices],
  bootstrap: [AppMain]
})

export class AppModule {
}
