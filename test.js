/* eslint-env mocha */

const assert = require('assert')
const mixin = require('.')

describe('debug', () => {
    it('passes a basic sanity check', () => {
        assert.doesNotThrow(() => mixin())
    });

    it('sanity check for a call with two parameter', () => {
        assert.doesNotThrow( () => mixin( {} ,{ foo: ()=>'bar'} ))
    });

    it('mixin a custom function', () => {
        const fooBar = mixin({}, { foo:()=>'bar' })
        assert.deepStrictEqual( fooBar.foo(), 'bar' )
    });

    it('sanity check for mixin three parameters', () => {
        assert.doesNotThrow( () => mixin( {}, { foo: ()=> 'bar' }, { bar: () => 'foo' } ) )
    });

    it('mixin two custom functions', () => {
        const fooBar = mixin({}, { foo:()=>'bar'}, {bar:()=>'foo'})
        assert.deepStrictEqual( fooBar.foo(), 'bar' )
        assert.deepStrictEqual( fooBar.bar(), 'foo' )
    })
})
