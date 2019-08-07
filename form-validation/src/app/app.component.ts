import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-validation';

  form: FormGroup;
  isSubmit = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(10)]],
    });

  }

  // conveniences getter for easy access to form controls
  get f() { return this.form.controls; }

  onSubmit() {
    this.isSubmit = true;
    if (this.form.status === 'INVALID') {
      console.log('Form invalid');
      return;
    }
    console.log(this.form);
  }

}
