import React, { useState } from 'react';

const Footer = () => {
  const footerCategories = [
    {
      category: "Popular",
      links: [
        { city: "Canmore", type: "Chalet rentals" },
        { city: "Benalmádena", type: "House rentals" },
        { city: "Marbella", type: "Flat rentals" },
        { city: "Mijas", type: "Flat rentals" },
        { city: "Prescott", type: "House rentals" },
        { city: "Scottsdale", type: "Rentals with pools" },
        { city: "Tucson", type: "Rentals with pools" },
        { city: "Jasper", type: "Cabin rentals" },
        { city: "Mountain View", type: "Pet-friendly rentals" },
        { city: "Devonport", type: "Cottage rentals" },
        { city: "Mallacoota", type: "Pet-friendly rentals" },
        { city: "Ibiza", type: "Holiday rentals" }
      ]
    },
    {
      category: "Arts & culture",
      links: [
        { city: "New York", type: "Museum rentals" },
        { city: "Paris", type: "Art gallery rentals" },
        { city: "Rome", type: "Historic rentals" },
        { city: "Florence", type: "Cultural stays" }
      ]
    },
    {
      category: "Outdoors",
      links: [
        { city: "Banff", type: "Mountain rentals" },
        { city: "Aspen", type: "Ski lodge rentals" },
        { city: "Whistler", type: "Adventure stays" }
      ]
    },
    {
      category: "Mountains",
      links: [
        { city: "Aspen", type: "Ski resort rentals" },
        { city: "Banff", type: "Chalet rentals" },
        { city: "Whistler", type: "Snow lodge rentals" }
      ]
    },
    {
      category: "Beach",
      links: [
        { city: "Malibu", type: "Beachfront rentals" },
        { city: "Miami", type: "Beach houses" },
        { city: "Bali", type: "Luxury stays" }
      ]
    },
    {
      category: "Unique stays",
      links: [
        { city: "Iceland", type: "Igloo rentals" },
        { city: "Norway", type: "Cabin rentals" },
        { city: "Finland", type: "Glasshouse rentals" }
      ]
    },
    {
      category: "Categories",
      links: [
        { city: "London", type: "City rentals" },
        { city: "Sydney", type: "Beach rentals" },
        { city: "Tokyo", type: "Urban rentals" }
      ]
    },
    {
      category: "Things to do",
      links: [
        { city: "New York", type: "Broadway shows" },
        { city: "Paris", type: "Wine tours" },
        { city: "Rome", type: "Historical tours" }
      ]
    }
  ];
  

  const [activeCategory, setActiveCategory] = useState("Popular");

  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 ">
        <div className="flex space-x-8 mb-4">
          {footerCategories.map((category, idx) => (
            <button
              key={idx}
              className={`pb-2 ${
                activeCategory === category.category
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Links for the active category */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {footerCategories
            .find((cat) => cat.category === activeCategory)
            .links.map((link, index) => (
              <div key={index} className="text-sm">
                <h4 className="font-medium text-gray-700">{link.city}</h4>
                <p className="text-gray-500">{link.type}</p>
              </div>
            ))}
        </div>

        {/* Show more button */}
        <div className="mt-4">
          <button className="text-gray-500 hover:text-black">
            Show more <span className="text-lg">&#x25BC;</span>
          </button>
        </div>
      </div>

      {/* Footer bottom part */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between text-sm">
          <p>&copy; 2024 Airbnb, Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Company details</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
