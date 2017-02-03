import React, { Component, PropTypes } from 'react'
import Section from '../Section'
import contents from '../../utils/contents'

export default class Sections extends Component {
  static displayName = 'SG.Sections'

  static propTypes = {
    ctx: PropTypes.object.isRequired
  }

  getContents () {
    let params = this.props.ctx.params
    let data = {}

    if (params.query) {
      data = {
        query: params.query,
        keys: ['category', 'title', 'description', 'code']
      }
    } else if (params.category) {
      data = {
        query: params.title || params.category,
        keys: params.title ? ['title'] : ['category'],
        exact: true
      }
    }

    return contents.search(data)
  }

  render () {
    return (
      <div>
        {this.getContents().map((Content, i) => {
          // This exists so we can pull out the displayName for props documentation
          Content.styleguide._self = <Content />

          Content.styleguide._id = i

          const props = { ...this.props, ...Content.styleguide.props }
          // Logical fork of stateless function components and other components
          const stateful = Content.prototype.isReactComponent === Component.prototype.isReactComponent

          return (
            <Section {...Content.styleguide} key={i}>
              {(!stateful || Content.prototype.render && stateful) && <Content {...props} />}
            </Section>
          )
        })}
      </div>
    )
  }
}
