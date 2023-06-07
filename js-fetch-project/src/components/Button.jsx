import React, { MouseEventHandler } from 'react'



const Button = ({onClickBool, handleLogout, buttonText, buttonType}) => {
  return(
    <div className='button-box'>
      <button className='button'
        type={buttonType}
        onClick={onClickBool ? handleLogout : undefined}
        >
        {buttonText}
      </button>
    </div>
  )
}

export default Button