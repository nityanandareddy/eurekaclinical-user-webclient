import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserProfileModule } from './user-profile/user-profile.module';

import { AppRoutingModule } from './app-routing.module';
import { ConfigurationService } from './config.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        UserProfileModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent
    ],
    providers: [
        ConfigurationService,
        Title
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }