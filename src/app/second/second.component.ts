import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() control: FormControl;
  
  constructor() { }

  ngOnInit(): void {
    this.control = this.control ?? new FormControl();
  }
}

