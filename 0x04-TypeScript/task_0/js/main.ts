export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Chinedum",
  lastName: "Oliver",
  age: 35,
  location: "Lagos, Nigeria"
};

const student2: Student = {
  firstName: "Lillian",
  lastName: "Peter",
  age: 30,
  location: "Ibadan, Nigeria",
};

const studentsList: Array<Student> = [
  student1,
  student2,
];
