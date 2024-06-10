import React from 'react'
import ProjectsItems from '../assets/ProjectsItems';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <div className='py-5' id='projects'>
        <div className='container'>
            <h2 className='mb-5'>My Projects</h2>
            <div className='row g-4'>
                {
                    ProjectsItems.map((project) => <ProjectCard key={project.id} 
                    projectImage={project.projectImg}
                    projectName={project.projectTitle}
                    projectDesc={project.projectDesc}
                    projectLink={project.projectLink}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectSection;