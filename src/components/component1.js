import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <section className="component1-container">
      <h1>{props.heading}</h1>
      <span>{props.text}</span>
      <span>{props.text1}</span>
      <span>{props.text2}</span>
      <span>{props.text3}</span>
      <span>{props.text4}</span>
      <span>{props.text5}</span>
      <span>{props.text6}</span>
      <span>{props.text7}</span>
    </section>
  )
}

Component1.defaultProps = {
  heading: 'Match Data',
  text1: 'PUUID',
  text7: 'Assists',
  text: 'Match ID',
  text4: 'Win',
  text3: 'Game Duration',
  text5: 'Kills',
  text6: 'Deaths',
  text2: 'Champion ID',
}

Component1.propTypes = {
  heading: PropTypes.string,
  text1: PropTypes.string,
  text7: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
}

export default Component1
