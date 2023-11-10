import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-6">About John Doe</h1>
      <p className="text-lg">
        John Doe is a fictional character, often used as a placeholder in
        documents and presentations. John Doe grew up in a small town with a
        passion for technology and design. He pursued his passion by studying
        computer science at a prestigious university.
      </p>
      <p className="text-lg my-4">
        After completing his studies, John ventured into the world of web
        development. He has worked on numerous projects, both big and small, and
        has gained a reputation for delivering high-quality work.
      </p>
      <p className="text-lg">
        In his free time, John enjoys hiking, photography, and exploring new
        technologies. He is always looking to push the boundaries of what's
        possible in web development and enjoys sharing his knowledge with the
        community.
      </p>
    </div>
  );
};

export default AboutPage;
