import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://instagram.com/hong.dev',
    color: 'hover:text-pink-500'
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    url: 'https://twitter.com/hong_dev',
    color: 'hover:text-blue-400'
  },
  {
    name: 'YouTube',
    icon: faYoutube,
    url: 'https://youtube.com/@hongdev',
    color: 'hover:text-red-500'
  },
  {
    name: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/hongdev',
    color: 'hover:text-gray-400'
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://linkedin.com/in/hongdev',
    color: 'hover:text-blue-500'
  }
];

const SNSLinks = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-3 py-3 px-6 rounded-lg bg-gray-800 
            ${link.color} transition-colors duration-300 hover:bg-gray-700`}
        >
          <FontAwesomeIcon icon={link.icon} className="text-xl" />
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SNSLinks; 