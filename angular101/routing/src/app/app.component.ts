import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form = this.formBuilder.group({
    test: ['test'],
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    console.log(this.form.value);
  }
}
