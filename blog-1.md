# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?


## Introduction
Generics are one of the most powerful feature in TypeScript. They allow developers to write reusable functions,classes while keeping strong type safety.Instead of writing separate code for different data types,generics let one piece of code work with many types.

## The Problem Generics Solve

Without generics, often duplicate code for different types.

```typescript
function getNum(arr: number[]): number {
  return arr[0];
}

function getStr(arr: string[]): string {
  return arr[0];
}
```
This works, but it creates repeated code.


Another option is using any, but that removes type safety.
```typescript:
function get(arr: any[]): any {
  return arr[0];
}
const value = get([1, 2, 3]);
value.toUpperCase(); // Runtime error
```
Here, TypeScript cannot protect us from mistakes.


# Using Generics

Generics solve this problem by using a type placeholder, usually written as <T>.

```typescript
function get<T>(arr: T[]): T {
  return arr[0];
}

const num = get([1, 2, 3]);
const str = get(["a", "b", "c"]);
```
TypeScript automatically understands num is a number,str is a string
This gives flexibility.

# Generic Interfaces
Generics can also be used with interfaces.
```typescript
interface Api<T> {
  data: T;
  status: number;
}

const user: Api<string> = {
  data: "Success",
  status: 200,
};
```
The same interface can work with different data types and also in class.


# Conclusion
Generics help developers write reusable and scalable code without losing type safety. They remove duplication, reduce errors, and allow functions, interfaces, and classes to work with many data types. 


