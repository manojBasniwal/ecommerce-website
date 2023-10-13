import React from 'react'
import PageWidthNavbar from '../../components/PageWidthNavbar'

function Contact() {
  return (
    <PageWidthNavbar>
      <h2 className='text-center pt-5 pb-5'>Contact page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56501.02450620932!2d76.1030007325906!3d27.738458477909468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d4785201d2fbf%3A0x98586c5e14bd1447!2sNareda%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1697173421226!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className='container contact-form-section'>
        <div className='contact-form'>
          <form action="https://formspree.io/f/mqkvwbbd" method="post" className='contact-inputs'>
            <input type="text" placeholder='username' name='username' autoComplete='off' required/>
            <input type='email' placeholder='Enter your email' name='Email' autoComplete='off' required/>
            <textarea name="Message" cols='30' row='10' placeholder='Enter your message' autoComplete='off' required></textarea>
            <input type="submit" value='submit'/>
          </form>
        </div>
      </div>
    </PageWidthNavbar>
  )
}

export default Contact
