import React from 'react'
import { Button } from 'react-bootstrap'

export default React.createClass({
  statics: {
    styleguide: {
      index: '5.4',
      category: 'Features!',
      title: 'React.createClass Support',
      code: `<Button>React.createClass Support!</Button>`
    }
  },

  render () {
    return <Button>React.createClass Support!</Button>
  }
})
