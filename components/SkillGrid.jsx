import React from "react";

const SkillGrid = () => {
  return (
    <ul className="list-none p-6 space-y-4">
      <li className="bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-100">
          Programming Languages
        </h3>
        <p className="text-gray-300">C/C++, HTML/CSS, JavaScript, Python</p>
      </li>
      <li className="bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-100">Databases</h3>
        <p className="text-gray-300">MongoDB, Oracle SQL</p>
      </li>
      <li className="bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-100">Front-End</h3>
        <p className="text-gray-300">
          Bootstrap, Framer Motion, React.js, Shadcn UI, Tailwind CSS
        </p>
      </li>
      <li className="bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-100">Back-End</h3>
        <p className="text-gray-300">Express.js, Next.js, Node.js</p>
      </li>
      <li className="bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-100">Systems/Tools</h3>
        <p className="text-gray-300">
          Git, Linux, macOS, Visual Studio Code, Windows
        </p>
      </li>
    </ul>
  );
};

export default SkillGrid;
