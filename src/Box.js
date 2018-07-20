import React from 'react'
import './Box.css'

const Box = props => {
  const style = {
    backgroundColor: props.color
  }
  return <div className="box" style={style} />
}

export default Box
