import React, { MouseEventHandler } from 'react'



const Button = ({disabled, onClickBool, handleLogout, buttonText, buttonType}) => {
  return(
    <div className='button-box'>
      <button className='button'
        type={buttonType}
        onClick={onClickBool ? handleLogout : undefined}
        disabled={disabled}
        >
        {buttonText}
      </button>
    </div>
  )
}

export default Button