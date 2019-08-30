import {Injectable, EventEmitter, Component} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ModalService {

  public hide = 'hide';
  public modalContent: Subject<any> = new Subject();
  public modalTitle = '';

  constructor() { }

  hideModal() {
    this.hide = 'hide';
  }

  showModal( title: string, component: any) {
    this.hide = '';
    this.modalTitle = title;
    this.modalContent.next(component);
  }

}
