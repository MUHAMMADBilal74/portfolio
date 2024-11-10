// pages/projects/page.tsx

import Layout from '../components/Layout/page';
import ProjectCard from '../components/ProjectCard/page';

const projects = [
  { id: '1', title: 'Project 1', description: 'Description for project 1' },
  { id: '2', title: 'Project 2', description: 'Description for project 2' },
];

const Projects = () => (
  <Layout>
    <section className="px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            id={project.id} 
            title={project.title} 
            description={project.description} 
          />
        ))}
      </div>
    </section>
  </Layout>
);

export default Projects;
