import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log( 'Esto es muy loco' );
  }

}
