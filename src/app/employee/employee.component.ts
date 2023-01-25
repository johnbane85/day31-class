import { Component, Input } from '@angular/core';
import { Employee } from '../models/models';

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

  Employees: Employee[] = [];

  myName: string = 'COMWorks';

  newServerName: string = 'myServer';

  constructor() {
    this.Employees = [
      { Name: 'Ah Kow', Age: 21, Gender: 'M' },
      { Name: 'Ah Meow', Age: 22, Gender: 'F' },
      { Name: 'Caterpillar', Age: 25, Gender: 'M' },
    ];
  }

  GetMoreEmployee() {
    this.Employees = [
      { Name: 'Ah Kow', Age: 21, Gender: 'M' },
      { Name: 'Ah Meow', Age: 22, Gender: 'F' },
      { Name: 'Caterpillar', Age: 25, Gender: 'M' },
      { Name: 'John', Age: 18, Gender: 'M' },
      { Name: 'Joel', Age: 10, Gender: 'M' },
      { Name: 'Cindy', Age: 34, Gender: 'F' },
      { Name: 'Linda', Age: 14, Gender: 'F' },
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

  TrackByEmployeeName(index: number, employee: any): string {
    return employee.Name;
  }

  CheckAge(Age: number) {
    let val = Age < 18 ? 'Under 18' : 'Above 18';

    switch (val) {
      case 'Under 18':
        return 'red';
      case 'Above 18':
        return 'green';
    }
    return '';
  }

  getCss(isEven: boolean) {
    if (isEven) {
      return 'color1';
    } else {
      return 'color3';
    }
  }

  showSomeData() {
    alert('Hello World!!!');
  }
}
