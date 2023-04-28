import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <section className="component-container">
      <h1>{props.heading}</h1>
      <span>{props.text}</span>
      <span>{props.text1}</span>
      <span>{props.text2}</span>
      <span>{props.text3}</span>
      <span>{props.text4}</span>
      <span>{props.text5}</span>
      <span>{props.text6}</span>
    </section>
  )
}

AppComponent.defaultProps = {
  text: 'Text',
  text2: 'Text',
  text3: 'Text',
  text1: 'Text',
  heading: 'Summoner Data',
  text4: 'Text',
  text6: 'Text',
  text5: 'Text',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  text5: PropTypes.string,
}

export default AppComponent
