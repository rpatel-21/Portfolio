import React from 'react'
import '../cssfiles/Projects.css'

const Projects = () => {
  const carddetails = [
    {
      id : '1',
      title : 'Project-1',
      image: 'pxfuel'
    },
    {
      id : '2',
      title : 'Project-2',
      image: 'Rishabh'
    },
    {
      id : '3',
      title : 'Project-3',
      image: 'pxfuel'
    },
    {
      id : '4',
      title : 'Project-4',
      image: 'pxfuel'
    },
    {
      id : '5',
      title : 'Project-5',
      image: 'pxfuel'
    },
    {
      id : '6',
      title : 'Project-6',
      image: 'pxfuel'
    },
    
    
  ];

  return (
    <div  className='project-card'>
      {carddetails.map((item) => {
        return(
          <div key={item.id} className='item-card'>
            <img  className='card-picture' src={require('../logoimage/' + item.image + '.jpg')} alt="" />
            <p className='card-details'>{item.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
