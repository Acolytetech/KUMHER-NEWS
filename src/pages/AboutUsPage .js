import React from "react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Delivering credible and comprehensive news to keep you informed.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At <strong>Your News Website</strong>, our mission is to provide unbiased, accurate, and up-to-date news to our readers. 
            We believe in the power of information to shape opinions, drive action, and create a more informed world. Our team 
            is dedicated to delivering stories that matter, with integrity and professionalism.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/61.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">Editor-in-Chief</p>
            </div>
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/78.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">John Smith</h3>
              <p className="text-gray-600">Senior Journalist</p>
            </div>
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/women/8.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Emily Johnson</h3>
              <p className="text-gray-600">Content Strategist</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
            <li><strong>Integrity:</strong> We uphold the highest standards of truth and accuracy.</li>
            <li><strong>Transparency:</strong> We believe in openness and accountability.</li>
            <li><strong>Diversity:</strong> We strive to represent all voices and perspectives.</li>
            <li><strong>Excellence:</strong> We are committed to delivering top-notch content to our audience.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
