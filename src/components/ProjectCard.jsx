import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Props are taken from our ProjectItems.jsx in the assets folder and mapped in ProjectSection.jsx
// Here, a predefined react-bootstrap card is used.
const ProjectCard = (props) => {
  return (
    <div className='col-md-6 col-lg-4'>
        <Card className='h-100 shadow'>
            <Card.Img variant='top' src={props.projectImage} />
            <Card.Body className='p-3'>
                <Card.Title className='fw-bold text-uppercase mb-4 fs-3'>{props.projectName}</Card.Title>
                <Card.Text>{props.projectDesc}</Card.Text>
                <a href={props.projectLink}><Button className='shadow text-capitalize' variant='outline-primary'>View Project</Button></a>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ProjectCard;