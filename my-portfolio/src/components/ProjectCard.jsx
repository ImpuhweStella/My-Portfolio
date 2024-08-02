import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
