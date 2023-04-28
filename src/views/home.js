import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import Component1 from '../components/component1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Revolving Different Pheasant</title>
        <meta property="og:title" content="Revolving Different Pheasant" />
      </Helmet>
      <nav className="home-container1"></nav>
      <div className="home-container2">
        <select>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <input type="text" placeholder="placeholder" className="input" />
        <button className="button">Button</button>
      </div>
      <div className="home-container3">
        <AppComponent></AppComponent>
      </div>
      <Component1></Component1>
    </div>
  )
}

export default Home
