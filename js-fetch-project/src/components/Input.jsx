import React from 'react'



const Input = ({handleChange, inputType, placeholderValue, name}) => {
  const onChange = (e) => {
    e.preventDefault()
    handleChange(e.target.name, e.target.value)
  }

  return(
    <div className='input-box'>
      <input
      name={name}
      type={inputType}
      placeholder={placeholderValue}
      onChange={onChange}
      />
    </div>
  )
}

export default Input