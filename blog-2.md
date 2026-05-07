# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

## Introduction
Object-Oriented Programming (OOP) helps reduce this complexity using four main concepts: Encapsulation,Inheritance, Abstraction,and Polymorphism. These pillars make code organized, reusable, and easier to maintain.


## 1. Encapsulation:
Encapsulation means keeping data safe inside a class and controlling access to it.

TypeScript enforces encapsulation with access modifiers: `public`, `private`, and `protected`.

```typescript
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```
Here, 'balance' is private, so it can't be changed directly from outside the class. This protects data and reduce bug.


## 2. Inheritance: 
Inheritance allows one class to reuse properties and method from another class.

```typescript
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}
```
The Dog class inherits the speak() method from Animal. This avoids repeating code and makes development faster.

---

## 3. Abstraction: 

Abstraction hides unnecessary details and shows only important features.

### Abstract Classes

```typescript
abstract class Payment {
  abstract pay(amount: number): void;
}

class CardPay extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} by card`);
  }
}
```
The abstract class defines a rule, while subclasses provide the actual implementation. This keeps code simple and organized.

---

## 4. Polymorphism:
Polymorphism allows the same method to behave differently in different classes.

```typescript
class Bird {
  sound() {
    console.log("Bird sound");
  }
}

class Parot extends Bird {
  sound() {
    console.log("Parot talks");
  }
}
```
Both classes use the sound() method, but each behaves differently. This makes systems flexible and easy to extend.
---

# How OOP Reduces Complexity

-Reduce repeated code
-Keep logic organized
-Make applications easier to scale
-Improve porductivity in large projects

## Conclusion

The four pillars of OOP help developers manage large TypeScript projects more effectively. Encapsulation protects data, inheritance promotes code reuse, abstraction simplifies complex systems, and polymorphism adds flexibility. Together, they create clean, scalable, and maintainable applications.