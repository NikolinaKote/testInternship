import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'internTest';
  sumForm: FormGroup;
  result;
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit() {
    this.sumForm = this.formBuilder.group({
      first: new FormControl(null, Validators.required),
      second: new FormControl(null, Validators.required)
    });
  }

  get first(): FormControl {
       return this.sumForm.controls.first as FormControl;
     }
  get second(): FormControl {
      return this.sumForm.controls.second as FormControl;    
    }
  sum(){
    this.result = this.sumForm.value.first + this.sumForm.value.second;
  }
}
