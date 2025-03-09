"use client";

import BookingForm from "@/components/BookingForm";
import ImageSlider from "@/components/ImageSlider";

export default function Detail() {
  return (
    <div className="bg-blue-500 w-full pt-16">
        {/* Content Container */}
        <div className="max-w-6xl mx-auto py-8 px-4 md:px-8 relative overflow-hidden">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 font-sigmar">
              Madu River Safari
            </h1>
      <ImageSlider />
      <h2 className="text-2xl font-bold mb-4">Madu River Safari</h2>
        <p className="text-gray-700 mb-4">
          Welcome to the Madu River Safari – A Magical Journey Through Nature’s Wonderland!
        </p>
        <p className="text-gray-700 mb-4">
          Imagine gliding through calm, shimmering waters surrounded by lush greenery, exotic wildlife, and the soothing sounds of nature. That’s exactly what the <strong>Madu River Safari</strong> offers – a breathtaking adventure in the heart of Sri Lanka’s stunning wetlands!
        </p>
        <h3 className="text-xl font-bold mb-2">What is the Madu River Safari?</h3>
        <p className="text-gray-700 mb-4">
          The Madu River is a serene and picturesque river located near <strong>Balapitiya</strong>, in the southern part of Sri Lanka. It’s part of the <strong>Madu Ganga Wetland</strong>, a protected area known for its rich biodiversity and tranquil beauty. The river safari takes you on a boat ride through this enchanting ecosystem, where you’ll discover:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Mangrove Forests</strong>: These unique trees grow in water and are home to countless creatures. They’re like nature’s water filters, keeping the river clean and healthy!</li>
          <li><strong>Tiny Islands</strong>: The river is dotted with over <strong>60 small islands</strong>, each with its own story. Some are so tiny you can stand on them, while others are large enough to explore.</li>
          <li><strong>Exotic Wildlife</strong>: Keep your eyes peeled for <strong>monkeys</strong>, <strong>monitor lizards</strong>, <strong>kingfishers</strong>, and even <strong>crocodiles</strong>! If you’re lucky, you might spot a rare bird or two.</li>
          <li><strong>Cinnamon Peeling</strong>: Learn how cinnamon, one of Sri Lanka’s most famous exports, is harvested and processed. You might even get to taste some fresh cinnamon!</li>
          <li><strong>Fish Therapy</strong>: Dip your feet into the river and let tiny fish give you a natural pedicure. It’s ticklish but fun!</li>
        </ul>
        <h3 className="text-xl font-bold mb-2">Why Visit the Madu River Safari?</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Relaxing</strong>: The calm waters and peaceful surroundings make it the perfect escape from the hustle and bustle of everyday life.</li>
          <li><strong>Educational</strong>: Learn about the importance of wetlands, mangroves, and conservation efforts.</li>
          <li><strong>Adventurous</strong>: Explore hidden corners of the river, visit ancient temples on the islands, and take stunning photos.</li>
          <li><strong>Family-Friendly</strong>: It’s a great experience for all ages – kids, adults, and even grandparents will love it!</li>
        </ul>
        <h3 className="text-xl font-bold mb-2">Tips for Your Safari:</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Wear Comfortable Clothes</strong>: Light, breathable fabrics are best for the tropical climate.</li>
          <li><strong>Bring Sunscreen and a Hat</strong>: The sun can be strong, so protect yourself.</li>
          <li><strong>Don’t Forget Your Camera</strong>: You’ll want to capture every moment of this magical journey.</li>
          <li><strong>Listen to Your Guide</strong>: They’ll share fascinating stories and ensure your safety.</li>
        </ul>
      <BookingForm />
    </div>
  </div>
  );
}