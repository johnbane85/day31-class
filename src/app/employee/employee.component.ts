import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  title = 'Employee page';

  // color: any;
  color: string = '';

  number1 = 12;
  number2 = 20;

  // visible = this.number1 < this.number2 ? true : false;

  visible = this.ShowContent(this.number1, this.number2);

  IsVisible = true;

  Employees: any[] = [];

  constructor() {
    this.Employees = [
      { Name: 'Ah Kow', Age: 21, Gender: 'M' },
      { Name: 'Ah Meow', Age: 22, Gender: 'F' },
      { Name: 'Caterpillar', Age: 25, Gender: 'M' },
    ];
  }

  ShowContent(val1: number, val2: number): boolean {
    return val1 < val2 ? true : false;
  }

  onChange(arg: any) {
    this.IsVisible = arg;
  }

  SetColor(event: any) {
    console.log(event);
    // console.info('event: ', event);
    this.color = event.target.value;
  }
}
