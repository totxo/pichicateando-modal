import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './Components/modal/modal.component';

import { ModalService } from './Components/modal/modal.service';
import { TestComponent } from './Components/test/test.component';
import { Test2Component } from './Components/test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TestComponent,
    Test2Component
  ]
})
export class AppModule { }
