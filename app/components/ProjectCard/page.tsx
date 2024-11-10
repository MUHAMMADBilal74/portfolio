// components/ProjectCard/page.tsx

import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
}

const ProjectCard = ({ id, title, description }: ProjectCardProps) => (
  <div className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href={`/projects/${id}`}>
      <button className="py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
        View Project
      </button>
    </Link>
  </div>
);

export default ProjectCard;


  