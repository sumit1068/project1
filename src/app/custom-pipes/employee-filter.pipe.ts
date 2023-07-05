import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: any[], searchText: string): any[] {
    if (!searchText) {
      return employees;
    }

    searchText = searchText.toLowerCase();

    return employees.filter(employee => {
      return (
        employee.name.toLowerCase().includes(searchText) ||
        employee.position.toLowerCase().includes(searchText)||
        employee.id.toLowerCase().includes(searchText)
      );
    });
  }

}
