import React from 'react';
import ViewWorkBtn from './ViewWorkBtn';
import developerCat from '../assets/images/developerCat.png';

// creates a flex column container on a small screen with my name and position on top of image which changes size depending on the screen size
const Header = () => {
  return (
    <header className='pt-5 bg-dark' id='header'>
      <div className='container py-md-5'>
        <div className='row'>
          <div className='col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5 mt-md-0'>
            <h3 className='text-secondary fw-bold lh-1 text-center text-md-start text-break'>Harmanpreet Deo</h3>
            <h1 className='text-capitalize text-center text-md-start text-primary lh-1 mb-5 text-break'>MERN stack <br /> web developer</h1>
            <ViewWorkBtn className="text-center d-grid d-md-inline-block" />
          </div>
          <div className='col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center'>
            <img className='img-fluid w-75 rounded-circle shadow my-5' src={developerCat} alt="Header Img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
