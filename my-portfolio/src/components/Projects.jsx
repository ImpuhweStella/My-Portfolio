import React from 'react';

const projects = [
  { title: 'Healthcare Management System', description: 'A comprehensive system for managing patient registrations, medical information, appointment scheduling, and feedback.' },
  { title: 'Car Ride-Sharing App',  description: 'An app to help users share car rides and ensure safety by providing nearby drivers, especially useful for users who are intoxicated.' },
  { title: 'Teacher Loan Hub', description: 'A platform to facilitate loans for teachers with streamlined application and approval processes.' },
  { title: 'Blog Management System', description: 'A platform to manage blog posts, with features for creating, editing, and deleting content, and user authentication.' },
  { title: 'Event Management Platform', description: 'A platform for managing events, including registration, scheduling, and feedback collection.' },
 
  { title: 'Live Sports Scores Web Page',description: 'A web page displaying live sports scores using a public API, with interactive charts and user interaction elements.' },
  { title: 'Natural Hair Care Guide', description: 'A web application providing tips and recipes for natural hair care, focusing on promoting hair growth.' },
];

const Portfolio = () => {
  return (
    <section className="bg-gray-900 text-white p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">My Portfolio</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
            
              <h3 className="text-xl font-bold mt-2">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
