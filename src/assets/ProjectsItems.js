// importing project images
import Project1Img from './images/torquetech.png';
import Project2Img from './images/Linguista.png';
import Project3Img from './images/Cookbook.png';
import Project4Img from './images/estorephp.png';
import Project5Img from './images/2dshooter.png';
import Project6Img from './images/2dfighter.jpg';

// set of all the projects with unique ids as its keys mapped in ProjectsSection.jsx as a list of ProjectCard.jsx component.
const ProjectsItems = [
    {
        id: 1,
        projectImg: Project1Img,
        projectTitle: 'MERN Stack CMS Website',
        projectDesc: 'Live MERN stack website to showcase content (products) along with an admin dashboard, google maps integration and contact form.',
        projectLink: 'https://www.torquetechrepair.ca'
    },
    {
        id: 2,
        projectImg: Project2Img,
        projectTitle: 'Linguista',
        projectDesc: 'a JUnit project showcasing different testing methods and features in Junit for a console-based menu of a language learning application.',
        projectLink: 'https://github.com/deoHRMN/Linguista_JUnit'
    },
    {
        id: 3,
        projectImg: Project3Img,
        projectTitle: 'CookBook Android App',
        projectDesc: 'a recipe sharing android application (Java) with live search feature and custom navigation drawer. Uses Firebase Storage and Firebase Authentication for storing images in real time and app sign in respectively.',
        projectLink: 'https://github.com/deoHRMN/CookBook'
    },
    {
        id: 4,
        projectImg: Project4Img,
        projectTitle: 'E-commerce PHP site',
        projectDesc: 'a php e-commerce web application created as a university project with cart system and admin dashboard to manage inventory and orders. Does not implement payment.',
        projectLink: 'https://estorephp.infinityfreeapp.com'
    },
    {
        id: 5,
        projectImg: Project5Img,
        projectTitle: 'JAVA 2D Shooter Game',
        projectDesc: 'a 2D single player shooting game developed in JAVA using Processing 4.3. Utilizes class inheritance and interfaces.',
        projectLink: 'https://github.com/deoHRMN/2DShooter'
    },
    {
        id: 6,
        projectImg: Project6Img,
        projectTitle: 'JAVA 2D Fighting Game',
        projectDesc: 'a simple 2D fighting game made in Java using Processing 4.3. Multiplayer game with map and character selection. Also implements user settings.',
        projectLink: 'https://github.com/deoHRMN/2DFighter'
    }
]

export default ProjectsItems;
