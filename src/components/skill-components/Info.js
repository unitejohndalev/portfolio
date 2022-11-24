import React from 'react'


function Info(props) {
  return (
    <div className='skillInfo-container'>
       
        <img src={props.skillname.skillImage}/>
        <img src={props.skillname.skillDataImg}/>
     
    </div>
  )
}

export default Info