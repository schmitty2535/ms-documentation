---  
sidebar_position: 1  
---  

# Spread syntax (...)

## Background
>“The **spread (`...`)** syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.” - **developer.mozilla.org**


``` javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6
```

In short, the spread syntax becomes useful when you need to include all elements from an object or array onto a new one, or when being applied one-by-one into a function’s arguments. The following are three scenarios in which the spread syntax can be used:
- **Object Literals** `{ ...object, key1: 'value1', key2: 'value2'}`
- **Array Literals** `[ ...array, '2', '3', '4' ]`
- **Function Arguments** `myFunction(...object)`

## Examples

### Spread in function calls

```javascript
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

### Spread in array literals

```javascript
let fruits = [ 'apple', 'oranges', 'grapes' ];

let foods = [ 'pizza', ...fruits, 'tocos' ];
// [ 'pizza', 'apple', 'oranges', 'grapes', 'tocos' ];
```

```javascript
let array1 = [ 1, 2, 3 ];

let array2 = [ ...array1 ];
// [ 1, 2, 3 ]
```

### Spread in object literals
```javascript
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```