import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
})
export class CenterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  func1() {
    // alert('hiiiiiiiiiiii')
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
}
