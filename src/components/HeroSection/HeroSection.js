import React from 'react';
import {NavLink } from 'react-router-dom'

function HeroSection() {
    return (
        <div className='container hero-section'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='hero-section-data'>
                        <p className='intro-data'>Welcome to</p>
                        <h1>Manoj Store</h1>
                        <p>Lorem ipsum dolor sit amit consectetur adipisicing elit. Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente.</p>
                        <NavLink>
                            <button className='btn'>show now</button>
                        </NavLink>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='hero-section-img'>
                        <figure>
                            <img src='https://media.istockphoto.com/id/1211356109/photo/family-shopping-in-supermarket.jpg?s=1024x1024&w=is&k=20&c=J_s99YihZGrxfrk3PKJgFz1sdoPoh-aKSYuGYk9vU1A=' alt=''/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
