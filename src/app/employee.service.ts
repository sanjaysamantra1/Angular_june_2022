import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  getAllEmployees() {
    return this.httpClient.get('http://localhost:4000/employees');
  }
  deleteEmployee(id: any) {
    return this.httpClient.delete(`http://localhost:4000/employees/${id}`);
  }
  addEmployee(newEmp: any) {
    return this.httpClient.post('http://localhost:4000/employees', newEmp);
  }
  updateEmployee(emp: any) {
    return this.httpClient.patch(`http://localhost:4000/employees/${emp.id}`, emp);
  }
}
