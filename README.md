# xprezzo-mixin

The concept of mixin is to allow a class to contains methods that can be used by another classes without inheritance from it. 

## usage


```
$ npm install --save xprezzo-mixin
```

```javascript
const mixin = require('xprezzo-mixin')

let obj = {}
mixin(obj, {
  foo: function () {
    return 'bar'
  }
})
obj.foo() // bar
```

## Comparison between xprezzo-mixin and Object.assign

Since NodeJS 4.0, we can use `Object.assign` to achieve this. This `xprezzo-mixin` project is trying to allow NodeJS before version 4.0 to have the ability to use the mixin.

Our previous example, 

```javascript
const mixin = require('xprezzo-mixin')

let obj = {}
mixin(obj, {
  foo: function () {
    return 'bar'
  }
})
obj.foo() // bar
```

obj can be rewrite  as class to use `Object.assign` after NodeJS 4.0:
```javascript
// usage:
class obj {}
Object.assign(obj.prototype, {
  foo: function () {
    return 'bar'
  }
})
new obj().foo() // bar
```

## Using mixin as substitue ES6 static function and static variables

ES6 allows us to create static function and static variables such that objects can share the same variable and the function. Here is an example:

```javascript
class Bird {
    static id = 1
    constructor () {
        console.log(`Bird ID: ${Bird.id}`);
        Bird.id++
    }
    say(msg) {
        console.log(msg)
    }
}
a = new Bird()
b = new Bird()
b.say('hi')
```
The execution result is: 
```
Bird ID: 1
Bird ID: 2
hi
```

However, we can also use xprezzo-mixin to replace static variable, such as:
```javascript
var mixin = require('xprezzo-mixin')

class Cat {
    constructor() {
        console.log(`Cat ID: ${Cat.id}`);
        Cat.id++
    }
    say(msg) {
        console.log(msg)
    }
}

mixin(Cat, {
    id: 1
})
c=new Cat()
d=new Cat()
d.say('Hello')
```
And the result would look like:

```
Cat ID: 1
Cat ID: 2
Hello
```

We can use an implementation called "prototype programming" which uses functions instead of ES6 class:
```javascript
var mixin = require('xprezzo-mixin')

function Dog() {
    console.log(`Dog ID: ${Dog.id}`);
    Dog.id++
    this.say= function(msg) {
        console.log(msg)
    }
}

mixin(Dog, {
    id: 1
})

e=new Dog()
f=new Dog()
f.say('Hola')
```

And it has similar result:

```
Dog ID: 1
Dog ID: 2
Hola
```


## People

Xprezzo and related projects are maintained by [Cloudgen Wong](mailto:cloudgen.wong@gmail.com).

# License

[MIT](LICENSE)
