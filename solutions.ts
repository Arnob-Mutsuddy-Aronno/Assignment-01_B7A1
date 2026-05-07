
function filterEvenNumbers(numbers: number[]): number[] {
  const result: number[] =[];

  for (const num of numbers){
    if (num %2 ===0) {
      result.push(num);
    }
  }
  return result;
}

function reverseString(strings: string): string {
  return strings.split("").reverse().join("");
}

function checkType(value: string | number): "String" | "Number"{
  if (typeof value === "string") return "String";
  return "Number";
}

function getProperty<T,Key extends keyof T>(obj:T,key: Key):T[Key]{
  return obj[key];
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus<T extends Book>(book: T): T & {isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}


class Person {
  constructor(protected name: string, protected age: number) {
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}


function getIntersection(a: number[], b: number[]): number[] {
  const B = new Set(b);
  const result: number[] =[];

  for (const n of a) {
    if (B.has(n)) {
      result.push(n);
    }
  }
  return result;
}