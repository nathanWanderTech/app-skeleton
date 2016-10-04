
const React = require('react')
import { Link } from 'react-router'

import '../styles/app.css'

export default React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='ui top fixed inverted menu'>
          <div className='ui container'>
            <a href='/' className='item logo'>Logo</a>
            <Link to='/home' className='item home'><i className='ui icon home' />Home</Link>
            <Link to='/items' className='item items'><i className='ui icon list' />Items</Link>
          </div>
        </div>

        <div className='app-view-container ui container'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
