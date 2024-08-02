import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Healthcare Management System',
      description: 'A system for managing patient records, appointments, and feedback using Node.js, Express, and MongoDB.',
    },
    {
      name: 'Car Ride-Sharing App',
      description: 'An app to share car rides and ensure safe transportation with nearby drivers.',
    },
    {
      name: 'Teacher Loan Hub',
      description: 'A website that helps teachers manage loans and financial information.',
    },
    {
      name: 'Student Management System',
      description: 'A system for managing student records, attendance, and grades using React Vite and Tailwind CSS.',
    },
  ];

  return (
    <section id="projects" className="bg-gray-700 py-20">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">My Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map(project => (
          <div key={project.name} className="bg-black text-white m-4 p-6 rounded-lg shadow-lg w-80 transition-transform duration-300 fade-in card-hover">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-lg mb-4">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
