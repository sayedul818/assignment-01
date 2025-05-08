# Interface vs Type in TypeScript

## What is an Interface?

An **interface** is like a system for objects. It says that an object **must** have certain things. For example:

```typescript
interface Person {
  name: string;
  age: number;
}
```

This means that if we use `Person`, the object must have a `name` (string) and `age` (number).

Here is an example:

```typescript
const user: Person = {
  name: "Rafi",
  age: 22
};
```

## Interface in a Class

We can also use an interface in a class. The class has to follow the system of the interface.

```typescript
class Student implements Person {
  constructor(public name: string, public age: number) {}
}
```

This means that the `Student` class must have a `name` and `age` just like the `Person` interface.

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



# What is the use of the `keyof` keyword in TypeScript?

## What is `keyof`?

`keyof` is a word in TypeScript that helps us get the names of the keys in an object.  
It gives us a type that is made from the keys of another type.

It’s like asking, “What are the property names of this object?”

## Example

Let’s say we have a type for a person:

```typescript
type Person = {
  name: string;
  age: number;
};
```

Now if we do this:

```typescript
type PersonKeys = keyof Person;
```

`PersonKeys` will be `"name" | "age"` because those are the keys in the `Person` type.

## Why is it useful?

we can use `keyof` to make yur code look like smarter and also safer.  
For example, it helps make sure us only use keys that really exist in the object.

Here’s a small function using `keyof`:

```typescript
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  name: "Rafi",
  age: 22
};

const userName = getValue(user, "name");
```

## Final Thoughts

`keyof` is useful when we want to work with keys of an object.  
It makes TypeScript more helpful and safe.  
