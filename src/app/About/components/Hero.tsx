import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div className="flex justify-center py-8 text-white">
      <div className="w-[95%] max-w-4xl space-y-12">
        
        <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2">
            <Image
              src="/home.avif"
              width={400}
              height={300}
              alt="About Blog"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white">About Creative Thoughts</h2>
            <p className="mt-4 text-white">
              Welcome to Creative Thoughts, where we dive into a variety of topics that inspire and educate. Our mission is to share insights, stories, and ideas that enrich our readers’ lives.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2 order-last md:order-first">
            <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
            <p className="mt-4 text-white">
              We believe in the power of knowledge and storytelling to make a difference. Our mission is to create content that informs, inspires, and sparks meaningful discussions.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/ai.jpg" 
              width={400}
              height={300}
              alt="Mission"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2">
            <Image
              src="/team.avif"
              width={400}
              height={300}
              alt="Topics"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-white">Topics We Cover</h3>
            <p className="mt-4 text-white">
              From technology and lifestyle to self-development and current events, our blog covers a wide array of topics tailored to engage curious minds.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2 order-last md:order-first">
            <h3 className="text-2xl font-semibold text-white">Meet the Team</h3>
            <p className="mt-4 text-white">
              Our team consists of passionate writers, editors, and creators who are dedicated to delivering high-quality content. We’re here to share unique perspectives and valuable insights with you.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/emp.avif" 
              width={400}
              height={300}
              alt="Team"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center mt-10">
          <h3 className="text-xl font-semibold text-white">Stay Connected</h3>
          <p className="mt-2 text-white">Follow us on social media and subscribe to our newsletter for updates!</p>
        </section>
      </div>
    </div>
  );
}

export default About;
