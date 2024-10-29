import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7163/api/Employee';

  // Inject HttpClient
  http = inject(HttpClient);

  getAllEmployees() {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(data: Employee) {
    return this.http.post<Employee>(this.apiUrl, data);
  }

  updateEmployee(employee: Employee) {
    return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
