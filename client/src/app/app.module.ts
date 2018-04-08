import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Utils } from './utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { PresentationSectionComponent } from './presentation-section/presentation-section.component';
import { TestSectionComponent } from './test-section/test-section.component';
import { SourceSectionComponent } from './source-section/source-section.component';
import { FooterComponent } from './footer/footer.component';
import { NewTestBendComponent } from './new-test-bend/new-test-bend.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    PresentationSectionComponent,
    TestSectionComponent,
    SourceSectionComponent,
    FooterComponent,
    NewTestBendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule
  ],
  entryComponents: [
    NewTestBendComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
