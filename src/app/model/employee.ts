/*
export interface Employee {

    id:number;
    first_name:string;
    last_name:string;
    email:string;
}
*/
export class Employee {
    public id: number;
    public first_name: string;
    public last_name: string;
    public email: string;
  
    constructor(id: number, first_name: string, last_name: string,email:string) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
    }
    getFullName(): string {
      return `${this.first_name} ${this.last_name}`;
    }
  
  }