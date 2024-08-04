import React from 'react';

const experiences = [
  {
    title: 'Backend Developer / Mentor',
    company: 'SheCanCode School, Igire Rwanda Organization',

    details: [
      'Developed and maintained web applications using Node.js, Express, and React.js, providing practical examples and insights to students.',
      'Implemented user authentication and authorization using JWT and OAuth, teaching students about security practices and authentication mechanisms.',
      'Designed and integrated RESTful APIs with Swagger UI for documentation, demonstrating the importance of clear API design and documentation to students.',
      'Collaborated with cross-functional teams to deliver high-quality software solutions, emphasizing the value of teamwork and communication skills to students.',
      'Offered career advice and supported mentees in building portfolios, preparing for interviews, and networking in the tech industry.',
    ],
  },
  // Add other experiences here
];

const Experience = () => {
  return (
    <section className="bg-black text-white p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Experience & Education</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400"></p>
            <ul className="list-disc ml-5 mt-2">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="text-gray-200">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
