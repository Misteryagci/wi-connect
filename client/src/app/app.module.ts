import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Utils } from './utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { PresentationSectionComponent } from './presentation-section/presentation-section.component';
import { TestSectionComponent } from './test-section/test-section.component';
import { SourceSectionComponent } from './source-section/source-section.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    PresentationSectionComponent,
    TestSectionComponent,
    SourceSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
