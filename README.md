
# Interface vs Type in TypeScript

## What is an Interface?

An **interface** is like a rule for objects. It says that an object **must** have certain things. For example:

```typescript
interface Person {
  name: string;
  age: number;
}
```

This means if we use `Person`, the object must have a `name` (string) and `age` (number).

Here is an example:

```typescript
const user: Person = {
  name: "Rafi",
  age: 22
};
```

## Interface in a Class

We can also use an interface in a class. The class has to follow the rules of the interface.

```typescript
class Student implements Person {
  constructor(public name: string, public age: number) {}
}
```

This means the `Student` class must have a `name` and `age` just like the `Person` interface.

## What is a Type?

A **type** is also for describing things, but it’s more flexible than an interface. Types can do more things, like combining different types.

Here’s an example with types:

```typescript
type Status = "on" | "off";
type ID = number | string;
```

This means `Status` can be `on` or `off`, and `ID` can be either a number or a string.

## Using Types for Objects

We can also use types to describe objects:

```typescript
type Product = {
  name: string;
  price: number;
};
```

## When to Use Interface or Type?

- Use **interface** if you need to describe an object or a class.
- Use **type** if you want to combine different types or use things like union types.


