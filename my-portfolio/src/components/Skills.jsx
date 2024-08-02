import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', rating: 5 },
    { name: 'Node.js', rating: 4 },
    { name: 'Express.js', rating: 4 },
    { name: 'React.js', rating: 4 },
    { name: 'MongoDB', rating: 3 },
  ];

  return (
    <section id="skills" className="bg-gray-800 py-20">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">My Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map(skill => (
          <div key={skill.name} className="bg-black text-white m-4 p-6 rounded-lg shadow-lg w-64 transition-transform duration-300 fade-in card-hover">
            <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
            <div className="flex">
              {Array(skill.rating).fill().map((_, i) => (
                <span key={i} className="text-gold">★</span>
              ))}
              {Array(5 - skill.rating).fill().map((_, i) => (
                <span key={i} className="text-gray-500">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
