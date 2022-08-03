import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  inputs: ['userObj', 'a', 'child1'],
  outputs: ['myEvent'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child2Component implements OnInit {
  userObj: any;
  a: any;
  child1: any;

  product = { id: 111, name: 'Samsung s15', price: 15000 };

  myEvent = new EventEmitter();
  sendDataToParent() {
    this.myEvent.emit(this.product);
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {}
  ngOnChanges() {
    console.log('child-2 ngOnChanges');
  }
  ngDoCheck() {
    console.log('child-2 ngDoCheck');
    this.changeDetectorRef.markForCheck();
  }
}
