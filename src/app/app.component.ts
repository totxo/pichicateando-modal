import { Component } from '@angular/core';
import { ModalService } from './Components/modal/modal.service';
import {TestComponent} from './Components/test/test.component';
import {Test2Component} from './Components/test2/test2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public modalService: ModalService
  ) {}

  openModalTest() {
    this.modalService.showModal( 'Test', TestComponent );
  }

  openModalTest2() {
    this.modalService.showModal( 'Test2', Test2Component );
  }
}
