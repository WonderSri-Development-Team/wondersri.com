"use client"; // Required for client-side interactivity
import { useState, useEffect } from "react";

export default function PopupNotification() {
  const [isVisible, setIsVisible] = useState(false);

  // Check localStorage to determine if the popup should be shown
  useEffect(() => {
    // FOR TESTING: Remove or comment out the next line after testing
    // localStorage.removeItem("hasVisited"); // Clears the "hasVisited" flag on every refresh

    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsVisible(true); // Show popup only on the first visit
      localStorage.setItem("hasVisited", "true"); // Mark as visited
    }
  }, []);

  // Function to close the popup
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* Popup Overlay */}
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Popup Container */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full animate-fade-in">
            {/* Popup Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Important Notice
            </h2>
            {/* Popup Message */}
            <p className="text-gray-700 text-sm mb-4">
              Currently, our services are limited to the Southern Province. We
              apologize for the inconvenience.
            </p>
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Close notification" // Accessibility improvement
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}