import React from "react";

export default function () {
  const activities = [
    {
      title: "Madu River Safari",
      description:
        "Explore the serene beauty of the Madu River with an unforgettable safari experience.",
      duration: "3-Hours",
      originalPrice: "Rs. 10,000",
      discountedPrice: "Rs. 9,000 / for 12 pax",
      imageUrl:
        "https://www.trawell.in/admin/images/upload/116283209Madu_River_Safari.jpg",
      rating: "★★★★☆",
    },
    {
      title: "Fish Therapy",
      description:
        "Experience the unique sensation of fish nibbling at your feet, a natural exfoliation therapy.",
      duration: "1-Hour",
      originalPrice: "Rs. 2,000",
      discountedPrice: "Rs. 1,500 / per person",
      imageUrl:
        "https://maduriversafari.lk/wp-content/uploads/2023/09/129675053348_61528087558_1657785626_n.jpg",
      rating: "★★★☆☆",
    },
    {
      title: "Temple Visit",
      description:
        "Visit ancient temples and immerse yourself in the spiritual and cultural heritage.",
      duration: "4-Hours",
      originalPrice: "Rs. 5,000",
      discountedPrice: "Rs. 4,000 / for 10 pax",
      imageUrl:
        "https://www.travels-tastes.com/data/images/barefoot.width-800.jpg",
      rating: "★★★★★",
    },
  ];

  return (
    <>
      <div className="bg-blue-500 w-full pt-16">
        <div className="max-w-6xl mx-auto py-8 px-4 md:px-8">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md bg-white transform transition duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    className="w-full h-40 object-cover rounded-t-lg"
                    src={activity.imageUrl}
                    alt={activity.title}
                  />
                  <span className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold text-white bg-blue-500">
                    Available
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-700 mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-blue-600 text-sm mb-2 line-clamp-2">
                    {activity.description}
                  </p>
                  <p className="text-blue-600 text-sm mb-2 line-clamp-2">
                    {activity.duration}
                  </p>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="text-gray-400 text-sm line-through">
                        {activity.originalPrice}
                      </p>
                      <p className="text-md font-bold text-green-600">
                        {activity.discountedPrice}
                      </p>
                      <p className="text-red-500 text-sm">Limited Time Offer!</p>
                    </div>
                    <span className="text-blue-400 text-sm">
                      {activity.rating}
                    </span>
                  </div>
                  <button className="bg-blue-700 text-white text-sm py-2 px-4 rounded hover:bg-blue-800 w-full">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}