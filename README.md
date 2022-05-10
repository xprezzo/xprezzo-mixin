# xprezzo-mixin

An implementation of setting the prototype of an instianted object.

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

## People

Xprezzo and related projects are maintained by [Cloudgen Wong](mailto:cloudgen.wong@gmail.com).

# License

[MIT](LICENSE)
