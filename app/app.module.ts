import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '@progress/kendo-angular-icons';
import { AppComponent } from './app.component';
import { CustomTimelineComponent } from './custom-timeline/custom-timeline.component';

@NgModule({
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        LayoutModule,
        IconsModule
    ],
    declarations: [AppComponent, CustomTimelineComponent],
    bootstrap:    [AppComponent]
})
export class AppModule {}
