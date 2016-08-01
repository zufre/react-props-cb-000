# React defaultProps

## Objectives

1. Explain how to use `defaultProps` on ES6 component classes
2. Explain how to use `getDefaultProps()` in a component declared with
   `React.createClass()`
3. Practice rendering a component with default props

## Overview

This lesson should be pretty basic: we just need to give students a little bit
of practice writing and rendering components with default properties. Ideally,
we'll start with ES6 component classes:

```javascript
const React = require('react')

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.greeting}</h1>
      </div>
    )
  }
}

MyComponent.defaultProps = {
  greeting: "Hello, world!"
}

module.exports = MyComponent
```

and then we can cover `React.createClass()`:

```javascript
const React = require('react')

module.exports = React.createClass({
  getDefaultProps() {
    return {
      greeting: 'Hello, world!'
    }
  },

  render() {
    return (
      <div>
        <h1>{this.props.greeting}</h1>
      </div>
    )
  }
})
```

As a bonus, and since this lesson will probably be short, this might be a good
time to introduce [ES class properties](http://babeljs.io/docs/plugins/transform-class-properties/)

Students will need to add a transform to their `babelify` setup, but it should
be pretty easy. Then they can do

```javascript
const React = require('react')

class MyComponent extends React.Component {
  defaultProps = {
    greeting: "Hello, world!"
  }

  render() {
    return (
      <div>
        <h1>{this.props.greeting}</h1>
      </div>
    )
  }
}

module.exports = MyComponent
```

## Resources

- [React Default Prop Values](https://facebook.github.io/react/docs/reusable-components.html#default-prop-values)
- [Babel: transform-class-properties](http://babeljs.io/docs/plugins/transform-class-properties/)
