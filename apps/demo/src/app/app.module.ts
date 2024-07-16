import {
  FullscreenOverlayContainer,
  OverlayContainer,
} from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'openseadragon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({ declarations: [AppComponent, ViewerComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        HammerModule,
        AppRoutingModule,
        CoreModule,
        SharedModule], providers: [
        { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
