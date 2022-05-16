import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() control: FormControl;
  
  constructor() { }

  ngOnInit(): void {
    this.control = this.control ?? new FormControl();
  }

}
