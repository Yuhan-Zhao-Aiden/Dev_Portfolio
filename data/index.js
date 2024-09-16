import { FaHome, FaServicestack, FaFileAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const links = [
  {
    name: "home",
    path: "/",
    icon: <FaHome />
  },
  {
    name: "services",
    path: "/services",
    icon: <FaServicestack />
  },
  {
    name: "resume",
    path: "/resume",
    icon: <FaFileAlt />
  },
  {
    name: "work",
    path: "/work",
    icon: <FaBriefcase />
  },
  {
    name: "contact",
    path: "/contact",
    icon: <FaEnvelope />
  }
];

export {
  links
};
