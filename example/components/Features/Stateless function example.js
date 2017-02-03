import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


function StatelessFunction() {
  return <Button>Stateless Function Support!</Button>
}

StatelessFunction.styleguide = {
  index: '5.3',
  category: 'Features!',
  title: 'Stateless function components',
  code: `<Button>Stateless Function Support!</Button>`
}

export default StatelessFunction
