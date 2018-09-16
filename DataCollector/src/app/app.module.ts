import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { DataService } from './services/data.service';

import { AuthguardGuard } from './authguard.guard';

import { ConfirmComponent } from './component/action/confirm/confirm.component';
import { routedComponents, AppRoutingModule } from './/app-routing.module';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import exporting from 'highcharts/modules/exporting.src';

import 'hammerjs';
import { AddtagComponent } from './component/action/taguer/addtag/addtag.component';


export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ exporting ];
}

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    ConfirmComponent,
    AddtagComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule,
    HttpModule,
    SharedModule,
    NgxPaginationModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,

  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }, UserService, AuthguardGuard, DataService ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmComponent, AddtagComponent],
})
export class AppModule { }
