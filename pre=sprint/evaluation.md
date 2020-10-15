# Object creation patterns

## Post lecture evaluation

---

&nbsp;

### Task 1

```js
function addToStorage(item) {
  this.storage.push(item);
}

function createStack() {
  const stack = {};

  stack.storage = {};
  stack.quantity = 0;
  stack.addToStorage = addToStorage;

  return stack;
}

const testStack = createStack();
testStack.addToStorage('piano');
```

a) Work out what happens when `testStack.addToStorage` is invoked in order to add the "piano" to storage
It will come back with a TypeError because you cannot "push" to an object.

---

&nbsp;

### Task 2

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const firstPerson = Person('Alice', 500);
const secondPerson = new Person('Alice', 500);
```

a) What value does `firstPerson` store ?</br>
It will store undefined because it is not using the keyword new.
b) What value does `secondPerson` store ?</br>
A new instance of Person with name as Alice and age as 500!
c) What does `this` point to when `Person` is invoked with the `new` keyword.
It would point to the new instance that the function is making.

---

&nbsp;

### Task 3

```js
function Account(name) {
  this.name = name;
  this.basket = [];
}

Account.prototype.addToBasket = function (item) {
  this.basket.push(item);
};

const testAccount = new Account('Jane');
```

For each of the following expressions below, identify whether they will evaluate to **true** or **false**.</br>
You must also try and provide justifications for your answers - feel free to lookup methods and operators online to help you work out your answers.

a) `testAccount.hasOwnProperty('Jane');`</br>
false - because the value is Jane not the property
b) `testAccount.hasOwnProperty('name');`</br>
true - because Jane has been assigned to the property name
c) `'name' in testAccount`</br>
true - becuase name is a property with the value Jane
d) `testAccount.hasOwnProperty('addToBasket')`</br>
false - because addToBasket is not a property of Account it is a method inside the prototype 
e) `'addToBasket' in testAccount`</br>
true - because there is a method addToBasket in the Account prototype
f) `testAccount.addToBasket === Account.prototype.addToBasket`</br>
true - because it is calling the same prototype function rather than making a new one every time
g) `Object.getPrototypeOf(testAccount) === Account`</br>
false - because it is testing against the whole of Account
h) `Object.getPrototypeOf(testAccount) === Account.prototype`
true - because testAccount is using the Account.prototype - using the same constructor


Once you've had a go at answer these you can run the code with `node` to see if you were right.

&nbsp;

### Task 4

Write a **test case (or test cases) only** below to assert that an `Animal` constructor returns an object with a name and species defined when the constructor is invoked. See below:

```js
const sammy = new Animal('Samuel', 'snake');

// sammy should be an object with the following form:

// {
//   name: 'Samuel',
//   species: 'snake;
//  }


test("check that the instance created is an object",()=>{
  expect(typeof sammy).toBe("object");
});
test("check the object has name and species properties",()=>{
  expect(Object.keys(sammy)).toEqual(["name", "species"]);
});
test("check that the values are correct",()=>{
  expect(sammy).toBe({name: 'Samuel', species: 'snake'});
});
test("check that if two instances are made they are different",()=>{  
  const timmy = new Animal('Timmy', 'giraffe');
  expect(timmy).not.toBe(sammy);
})


```


