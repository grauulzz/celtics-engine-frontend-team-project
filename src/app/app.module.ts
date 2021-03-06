
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import {PageState} from "./types/page-state";
import { LoginPageComponent } from './main-page/login-page/login-page.component';
import { AssetPostPageComponent } from './main-page/asset-post-page/asset-post-page.component';
import { ImageUploadComponent } from './main-page/asset-post-page/image-upload/image-upload.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilePageComponent } from './main-page/profile-page/profile-page.component';
import { AssetDetailsPageComponent } from './main-page/asset-details-page/asset-details-page.component';
import { SearchPageComponent } from './main-page/search-page/search-page.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { FooterComponent } from './footer/footer.component';

import awsconfig from '../aws-exports';
import {Amplify} from "aws-amplify";
import { AssetUploadComponent } from './main-page/asset-post-page/asset-upload/asset-upload.component';
import { SearchPannelComponent } from './main-page/search-page/search-pannel/search-pannel.component';
import {RouterModule} from "@angular/router";

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    LoginPageComponent,
    AssetPostPageComponent,
    ImageUploadComponent,
    ProfilePageComponent,
    AssetDetailsPageComponent,
    SearchPageComponent,
    FooterComponent,
    AssetUploadComponent,
    SearchPannelComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAuthenticatorModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
