import { Component ,OnInit} from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers:[EmployeeService]
})
export class AppComponent implements OnInit {
employees:Employee[];
constructor(private emp:EmployeeService){
 

}
ngOnInit(){
  this.employees=this.emp.getEmployee();
}

}
