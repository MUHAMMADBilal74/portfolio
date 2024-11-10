import Layout from '../components/Layout/page';

const About = () => (
  <Layout>
    <section className="px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
        Hello! I'm a web developer with a passion for building beautiful, functional, and user-friendly applications. I have experience in various technologies and skills.
      </p>
      <div className="mt-8">
        <img src="/pics/image-4.jpg" alt="Profile" className="w-48 h-48 rounded-full mx-auto shadow-lg"/>
      </div>
    </section>
  </Layout>
);

export default About; // Ensure you are exporting the component as default




