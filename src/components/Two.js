import React from 'react'

function Two(props) {
  return (
    <div style={{backgroundColor: 'blue',width:"200px"}}>
        <h1>Layer Two {props.data}</h1>
    </div>
  )
}

export default Two