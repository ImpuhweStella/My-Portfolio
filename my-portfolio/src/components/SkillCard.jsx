import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold">{skill}</h3>
    </div>
  );
};

export default SkillCard;
