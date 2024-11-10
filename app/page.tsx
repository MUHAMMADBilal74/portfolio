import Image from "next/image";

import Layout from '../app/components/Layout/page';

// pages/index.tsx


export default function Home() {
  return (
    <Layout>
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-600 text-lg mb-8">Showcasing my work and achievements.</p>
        
        {/* Hero Image */}
        <div className="relative w-full h-[500px] mb-8">
          <Image 
            src="/pics/image-1.jpg" 
            alt="Hero image of a beautiful scenery" 
            layout="fill" 
            objectFit="cover" 
            quality={80} 
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative w-full h-72">
            <Image 
              src="/pics/image-2.jpg" 
              alt="Project 1 description" 
              layout="fill" 
              objectFit="cover" 
              quality={70} 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="relative w-full h-72">
            <Image 
              src="/pics/image-1.jpg" 
              alt="Project 2 description" 
              layout="fill" 
              objectFit="cover" 
              quality={70} 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="relative w-full h-72">
            <Image 
              src="/pics/image-2.jpg" 
              alt="Project 3 description" 
              layout="fill" 
              objectFit="cover" 
              quality={70} 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}


