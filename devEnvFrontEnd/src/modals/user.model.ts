export class User {
  constructor(firstname: string, lastname: string, email: string, role: string, password: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.role = role;
    this.password = password;
  }
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  password: string;
}
