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
import {AppFooter} from "./html/footer/app.footer.ts";
import {AppLearn} from "./html/subpages/learn/app.learn.ts";
import {CategoryListComponent} from "./html/subpages/categories/categorylist.ts";
import {AppGame} from "./html/subpages/game/app.game.ts";
import {Wordlist} from "./html/subpages/word_list/app.wordlist.ts";
import {EditCategoryComponent} from "./html/subpages/edit/edit.category.ts";
import {Startpage} from "./html/subpages/start/app.startpage.ts";
import {Loginpage} from "./html/subpages/login/app.loginpage.ts";
import {Signup} from "./html/subpages/login/app.signup";
import {DataServices} from "./DataService";
import {EditWordComponent} from "./html/subpages/edit/edit.word";

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
    path: '#/category-list',
    component: CategoryListComponent
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
    path: '#/editcategory',
    component: EditCategoryComponent
  },
  {
    path: '#/editword',
    component: EditWordComponent
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
    CategoryListComponent,
    AppGame,
    Wordlist,
    EditCategoryComponent,
    EditWordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [DataServices],
  bootstrap: [AppMain]
})

export class AppModule {
}
