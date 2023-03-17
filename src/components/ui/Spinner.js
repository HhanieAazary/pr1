import React from 'react'
import SpinnerImg from '../../assets/images/spinner.gif' 
// alert('fff')
export default function spinner() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <img src={ SpinnerImg } alt="" />
    </div>
  )
}