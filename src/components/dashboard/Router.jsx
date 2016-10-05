
const React = require('react')
const ReactDOM = require('react-dom')

import { Router, Route, browserHistory } from 'react-router'

const App = require('./App')
const HomeSection = require('./HomeSection')
const ItemsSection = require('./ItemsSection')

export default React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path='/' component={HomeSection} />
          <Route path='/home' component={HomeSection} />
          <Route path='/items' component={ItemsSection} />
        </Route>
      </Router>
    )
  }
})