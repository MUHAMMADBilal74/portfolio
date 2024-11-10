import { useRouter } from 'next/router';

const projects = [
  { id: '1', title: 'Project 1', description: 'Description for Project 1', image: '/images/project1.jpg', details: 'Detailed information about Project 1' },
  { id: '2', title: 'Project 2', description: 'Description for Project 2', image: '/images/project2.jpg', details: 'Detailed information about Project 2' },
  // Add more projects here as needed
];

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the project that matches the id from the URL
  const project = projects.find((proj) => proj.id === id);

  if (!project) return <p>Project not found</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <p>{project.details}</p>
    </div>
  );
};

export default ProjectDetails;
