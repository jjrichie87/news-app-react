import React from 'react'
import { connect } from 'react-redux'
import { sayHello } from '../../actions'

let IMG = ({ src, alt }) => (

  <img src={"https://www.nytimes.com/" + src} alt={alt} />

)

export default IMG;
