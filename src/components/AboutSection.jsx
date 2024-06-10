import React from 'react'
import AboutImage from '../assets/images/aboutimg.gif';
import ViewWorkBtn from './ViewWorkBtn';

const AboutSection = () => {
  return (
    <div className='bg-dark text-light py-5 container-fluid' id='about'>
        <div className='flex-column-reverse flex-md-row row'>
            <div className='col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center'>
                <img className='img-fluid w-50 rounded-circle shadow my-5' src={AboutImage} alt="About Section Img" />
            </div>
            <div className='col-md-6 px-5 md-flex flex-column justify-content-center'>
                <h2 className='mb-5'>About me</h2>
                <p className='text-start'>As a proactive and ambitious IT student, I possess hands-on experience in project management and desktop support. My journey in the IT field has equipped me with a strong understanding of various programming languages and IT administration tasks. I have successfully managed several projects, showcasing my ability to plan, execute, and deliver results effectively. My experience in desktop support has honed my skills in troubleshooting and resolving technical issues promptly, ensuring minimal disruption to users and maintaining high levels of user satisfaction.</p>
                <p className='text-start mb-5'>In addition to my project management and desktop support expertise, I am adept at solving complex technical challenges. I have a solid foundation in creating dynamic, responsive web and mobile applications, utilizing the latest technologies and best practices. My technical proficiency is complemented by my eagerness to provide effective user and IT support, always striving to enhance user experience and operational efficiency. Whether working on developing applications or assisting users with IT issues, I am committed to delivering high-quality solutions and continuous improvement.</p>
                <ViewWorkBtn />
            </div>
        </div>
    </div>
  )
}

export default AboutSection;