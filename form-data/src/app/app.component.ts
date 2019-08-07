import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from './employee.model';
import { ItemSelect } from './item-select.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-data';

  isSubmit = false;
  form: FormGroup;
  listGroup: ItemSelect[] = [];
  employee: Employee;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employee = new Employee();

    this.listGroup.push(new ItemSelect('1', 'Group 1'));
    this.listGroup.push(new ItemSelect('2', 'Group 2'));
    this.listGroup.push(new ItemSelect('3', 'Group 3'));
    this.listGroup.push(new ItemSelect('4', 'Group 4'));

    this.form = this.fb.group({
      id: [this.employee.id, Validators.required],
      name: [this.employee.name, [Validators.required, Validators.minLength(10)]],
      gender: [this.employee.gender],
      isMarried: [this.employee.isMarried],
      check: ['', [Validators.maxLength(5)]],
      groupId: [this.employee.groupId, [Validators.required]]
    });


    console.log(this.employee);
    console.log(this.listGroup);

  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.isSubmit = true;
    console.log('submit click');
    console.log(this.form);
    console.log(this.f.name.errors);
    if (this.form.invalid) {
      console.log('Form invalid this.form.invalid');
      return;
    }

    if (this.form.status === 'INVALID') {
      console.log('Form invalid this.form.status');
      return;
    }

    console.log(this.form);
  }


}




