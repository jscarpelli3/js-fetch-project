import React from 'react'



const Input = ({inputType, defaultValue}) => {
  return(
    <div className='input-box'>
      <input
      type={inputType}
      defaultValue={defaultValue}
      />
    </div>
  )
}

export default Input