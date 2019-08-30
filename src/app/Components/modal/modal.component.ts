import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalService} from './modal.service';
import {TestComponent} from '../test/test.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @ViewChild('componentHost', { read: ViewContainerRef })
  componentHost;

  constructor(
    public modalService: ModalService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {

    this.modalService.modalContent
      .subscribe( component => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(<Type<Component>>component);
        const viewContainerRef = this.componentHost;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);

        console.log( componentRef );

        // const componentType1Instance = (<TestComponent>componentRef.instance);


      });
  }

  closeModal() {
    this.modalService.hideModal();
  }

}
