import React from 'react';

const features = [
  "High Accuracy",
  "Detailed Reports",
  "Real-time Detection",
  "Easy to Use"
];

const Features: React.FC = () => (
  <section className="text-center py-12">
    <h2 className="text-3xl font-bold mb-8">Platform Features</h2>
    <div className="flex justify-center space-x-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-lg text-gray-300 transition duration-200 hover:bg-gray-900 hover:font-bold hover-white-shadow"
        >
          {feature}
        </div>
      ))}
    </div>
  </section>
);

export default Features;
