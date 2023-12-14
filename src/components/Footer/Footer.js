import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <section className='container'>
                <div className='contact-short'>
                    <div className='sort-section'>
                        <div className='sort-text-section'>
                            <h3>Ready to get started</h3>
                            <h3>Talk to us today</h3>
                        </div>
                        <div className='sort-btn-section'>
                            <button>
                                <NavLink to="/contact">Get Started</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className='footer-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-3'>
                                <div className='footer-about'>
                                    <h4>Manoj Basniwal</h4>
                                    <p>Lorem ipsum dolor, sit amit consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-3'>
                                <div className='footer-subscribe'>
                                    <h4>Subscribe to get important updates</h4>
                                    <form action='#'>
                                        <input type='email' placeholder='your email' className='email mb-3' />
                                        <input className='button' type='submit' value='submit' />
                                    </form>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-3'>
                                <div className='footer-social'>
                                    <h4>Follow us</h4>
                                    <div className='footer-social-icons'>
                                        <span className='icons me-2'>
                                            <i className="fa-brands fa-discord"></i>
                                        </span>
                                        <span className='icons me-2'>
                                            <i className="fa-brands fa-square-instagram"></i>
                                        </span>
                                        <a href='https://www.youtube.com/' target='_blank'>
                                            <span className='icons'>
                                                <i className="fa-brands fa-youtube"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div className='col-12 col-md-6 col-lg-3'>
                                <div className='footer-contact'>
                                    <h4>Call Us</h4>
                                    <h5>+91 8824074161</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
