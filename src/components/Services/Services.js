import React from 'react'

function Services() {
    return (
        <div className='container services-section'>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <div className='services-1'>
                        <i className="fa fa-truck-fast icon"></i>
                        <h5>Supere Fast and Free Delivery</h5>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='services-2'>
                        <div className='services-colum-2'>
                            <i class="fa fa-shield-halved icon"></i>
                            <h5 className='ms-2'>Non-contact Shipping</h5>
                        </div>
                        <div className='services-colum-2'>
                            <i className="fa fa-hands-holding icon"></i>
                            <h5  className='ms-2'>Money-back Guaranteed</h5>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='services-3'>
                        <i className="fa fa-light fa-building-lock icon"></i>
                        <h5>Super Secure Payment System</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
