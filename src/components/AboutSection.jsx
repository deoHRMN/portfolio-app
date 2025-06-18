import React from 'react'
import AboutImage from '../assets/images/aboutimg.gif';
import ViewWorkBtn from './ViewWorkBtn';

// Create an About section with image on left and paragraphs on right which on smaller screen follow flex-reverse format 
// meaning that the image goes below paragraphs  
const AboutSection = () => {
  return (
    <div className='bg-dark text-light py-5 container-fluid' id='about'>
        <div className='flex-column-reverse flex-md-row row'>
            <div className='col-md-6 col-lg-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center'>
                <img className='img-fluid w-50 rounded-circle shadow my-5' src={AboutImage} alt="About Section Img" />
            </div>
            <div className='col-md-6 col-lg-6 px-5 md-flex flex-column justify-content-center'>
                <h2 className='mb-5'>About me</h2>
              <p className='text-start'>
  I am a recent B.Tech graduate with a 4.03 GPA and a strong foundation in full stack and software development. Throughout my academic journey and real-world projects, I have built secure, responsive, and database-driven web applications using technologies like React, Node.js, PHP, MySQL, Java, and MongoDB.
</p>
<p className='text-start mb-5'>
  My experience spans across user authentication systems, admin dashboards, e-commerce platforms, search functionality, and profile-based recommendation logic. I enjoy working across both frontend and backend, writing clean, maintainable code while solving real-world problems through scalable solutions. I’m passionate about continuous learning, especially in AI and backend systems, and I’m currently seeking opportunities to contribute to impactful projects in web or software development.
</p>
                <ViewWorkBtn />
            </div>
        </div>
    </div>
  )
}

export default AboutSection;
