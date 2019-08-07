export class Employee {
  id: string;
  name: string;
  gender: string;
  isMarried: boolean;
  groupId: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.gender = 'male';
    this.isMarried = true;
    this.groupId = '';
  }
}
