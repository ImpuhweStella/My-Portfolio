import React from 'react';

const skills = [
  { name: 'JavaScript', level: '80%' },
  { name: 'React.js', level: '70%' },
  { name: 'Node.js', level: '75%' },
  { name: 'Express.js', level: '60%' },
  { name: 'MongoDB', level: '65%' },
  { name: 'Tailwind CSS', level: '50%' },
];

const Skills = () => {
  return (
    <section className="bg-black text-white p-6 mb-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div className="bg-gold h-2 rounded-full" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
