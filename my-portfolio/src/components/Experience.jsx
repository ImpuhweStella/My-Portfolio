import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Developer / Mentor',
      company: 'SheCanCode School, Igire Rwanda Organization',
      duration: 'October 2023 - July 2024',
      tasks: [
        'Developed and maintained web applications using Node.js, Express, and React.js.',
        'Implemented user authentication and authorization using JWT and OAuth.',
        'Designed and integrated RESTful APIs with Swagger UI for documentation.',
        'Collaborated with cross-functional teams to deliver high-quality software solutions.',
        'Offered career advice and support to mentees in building portfolios, preparing for interviews, and networking in the tech industry.',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'SheCanCode School, Igire Rwanda Organization',
      duration: 'September 2022 - December 2022',
      tasks: [
        'Acquired skills in front-end technologies like HTML, CSS, JavaScript, and React.js.',
        'Learned backend technologies such as Node.js and Express.',
        'Explored UI/UX design principles using Figma.',
      ],
    },
    {
      title: 'TheGym Rwanda Trainee',
      company: 'The Gym Rwanda',
      duration: 'December 2022 - December 2022',
      tasks: [
        'Designed mobile applications using the Thunkable platform.',
        'Utilized Figma for designing app layouts, wireframes, and prototypes.',
        'Collaborated with development teams to implement design elements.',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-800 py-20">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Professional Experience</h2>
      <div className="flex flex-wrap justify-center">
        {experiences.map(exp => (
          <div key={exp.title} className="bg-black text-white m-4 p-6 rounded-lg shadow-lg w-80 transition-transform duration-300 fade-in card-hover">
            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
            <p className="text-lg italic mb-2">{exp.company}</p>
            <p className="text-lg mb-4">{exp.duration}</p>
            <ul className="text-lg list-disc list-inside">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
