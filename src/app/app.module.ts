import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { NumberparentComponent } from './numberparent/numberparent.component';
import { ColorparentComponent } from './colorparent/colorparent.component';
import { ColorDirective } from './colorparent/color.directive';
import { FormsModule } from '@angular/forms';
import { HighlightComponent } from './highlight/highlight.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { HighlightchildrenComponent } from './highlightchildren/highlightchildren.component';
import { RefComponent } from './ref/ref.component';
import { RefDirective } from './ref/ref.directive';


@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    NumberparentComponent,
    ColorparentComponent,
    ColorDirective,
    HighlightComponent,
    HighlightDirective,
    HighlightchildrenComponent,
    RefComponent,
    RefDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
