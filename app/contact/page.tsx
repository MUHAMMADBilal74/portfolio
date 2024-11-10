// pages/contact/page.tsx

import Layout from '../components/Layout/page';

const Contact = () => (
  <Layout>
    <section className="px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Me</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        If you would like to get in touch, feel free to reach out through the form below!
      </p>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md" />
        <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-md h-32"></textarea>
        <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  </Layout>
);

export default Contact;
