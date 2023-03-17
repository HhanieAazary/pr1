import React from 'react'
import Contactimg from "../assets/images/contact.png"

export default function Contact_uspages() {
  return (
    <div className=' container '>

      <div className='row'>
        <div className='col-12 bg-info p-3 rounded'>

          ContactUs
        </div>

      </div>

      <div className='row align-items-center mt-1' >

        <div className='col-md-7 '>
          <h3>How to contact us</h3>
          <h5>0912444444</h5>
          <h5>021 22222</h5>
          <h5>text@fara.com</h5>


          <div>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input type="text" className="form-control" placeholder="Please type your name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Massage</label>
            <input type="text" className="form-control" placeholder="Please type your massage" />
          </div>

          <button className='btn btn-outline-primary ms-3'>send</button>

        </div>
        

        </div>
        <div className='col-md-5 text-center'>
          <img src={Contactimg} alt="about" className='img-fluid about_img' />
        </div>

      </div>


    </div>
  )
}
