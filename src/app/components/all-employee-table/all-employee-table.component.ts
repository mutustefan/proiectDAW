import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entities/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-all-employee-table',
  templateUrl: './all-employee-table.component.html',
  styleUrls: ['./all-employee-table.component.css'],
})
export class AllEmployeeTableComponent implements OnInit {
  employees: any[];
  warningModal: boolean;
  idForDelete: number;
  constructor(private service: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
    console.log(this.employees);
  }

  loadEmployees(): void {
    this.service.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  confirmDelete(): void {
    this.service.deleteEmployees(this.idForDelete).subscribe((data) => {
      this.loadEmployees();
    });
    this.warningModal = false;
  }

  deleteEmployee(id: any) {
    // if (window.confirm('Are you sure, you want to delete?')) {
    //   this.employeeService.deleteEmployees(id).subscribe((data) => {
    //     this.loadEmployees();
    //   });
    // }
    this.idForDelete = id;
    this.warningModal = true;
  }
  // confirmDelete(): void {
  //   this.employeeService.deleteEmployees(this.idForDelete).subscribe((data) => {
  //     this.loadEmployees();
  //   });
  //   this.warningModal = false;
  // }

  closeWarningModal(): void {
    this.warningModal = false;
  }

  closeDeleteModal(): void {
    this.warningModal = false;
  }
}
