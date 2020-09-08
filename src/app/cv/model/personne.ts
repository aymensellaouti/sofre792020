export class Personne {
  id: number;
  name: string;
  firstname: string;
  job: string;
  path: string;
  cin: number;
  age: number;

  constructor(
    id: number = 0,
    name: string = '',
    firstname: string = '',
    job: string = '',
    path: string = '',
    cin: number = 0,
    age: number = 0
  ) {
    this.age = age;
    this.id = id;
    this.job = job;
    this.path = path;
    this.cin = cin;
    this.name = name;
    this.firstname = firstname;
  }
}
