"use client"; // Required for client-side interactivity in Next.js

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

// Move today outside the component to prevent re-creation on every render
const today = new Date("2025-03-07");

interface FormData {
  name: string;
  email: string;
  phone: string;
  pax: number;
  date: string;
  timeSlot: string;
}

interface Month {
  name: string;
  days: number[];
  startDay: number;
}

const BookingPage: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    pax: 1,
    date: "",
    timeSlot: "",
  });

  // State for calendar and selected date
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [months, setMonths] = useState<Month[]>([]);

  // State for available time slots
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  // State for reCAPTCHA
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Generate two months from today
  useEffect(() => {
    const generateMonths = () => {
      const currentMonth = today.getMonth();
      const currentYear = today.getFullYear();
      const monthsData: Month[] = [
        {
          name: new Date(currentYear, currentMonth).toLocaleString("default", { month: "long", year: "numeric" }),
          days: new Array(new Date(currentYear, currentMonth + 1, 0).getDate())
            .fill(null)
            .map((_, i) => i + 1),
          startDay: new Date(currentYear, currentMonth, 1).getDay(), // 0=Sun, 6=Sat
        },
        {
          name: new Date(currentYear, currentMonth + 1).toLocaleString("default", { month: "long", year: "numeric" }),
          days: new Array(new Date(currentYear, currentMonth + 2, 0).getDate())
            .fill(null)
            .map((_, i) => i + 1),
          startDay: new Date(currentYear, currentMonth + 1, 1).getDay(),
        },
      ];
      setMonths(monthsData);
    };
    generateMonths();
  }, []); // Empty dependency array since today is a constant

  // Fetch available time slots based on the selected date
  useEffect(() => {
    const fetchAvailableTimeSlots = async () => {
      if (selectedDate) {
        try {
          const [month, day, year] = selectedDate.split(" ");
          const dateStr = `${year}-${new Date(`${month} 1, ${year}`).toLocaleString("default", { month: "2-digit" })}-${day.padStart(2, "0")}`;
          const response = await axios.get<{ slots: string[] }>(
            `/api/available-slots?date=${dateStr}`
          ); // Backend endpoint
          setAvailableTimeSlots(response.data.slots || ["9:00 AM", "12:00 PM", "3:00 PM"]);
          setFormData((prevData) => ({ ...prevData, date: selectedDate }));
        } catch (error) {
          console.error("Error fetching available time slots:", error);
          setAvailableTimeSlots(["9:00 AM", "12:00 PM", "3:00 PM"]);
        }
      }
    };
    fetchAvailableTimeSlots();
  }, [selectedDate]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "pax" ? parseInt(value, 10) : value,
    }));
  };

  // Handle pax increment and decrement
  const handlePaxChange = (direction: "increment" | "decrement") => {
    setFormData((prevData) => {
      let newPax = prevData.pax;
      if (direction === "increment" && newPax < 20) {
        newPax += 1;
      } else if (direction === "decrement" && newPax > 1) {
        newPax -= 1;
      }
      return { ...prevData, pax: newPax };
    });
  };

  // Handle date selection from calendar
  const handleDateSelect = (month: string, day: number) => {
    const [monthName, year] = month.split(" ");
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth(); // 0-11 (Jan-Dec)
    const selected = new Date(parseInt(year, 10), monthIndex, day).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setSelectedDate(selected);
  };

  // Handle reCAPTCHA change
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await axios.post("/api/verify-recaptcha", {
        token: recaptchaToken,
      });

      if (response.data.success) {
        console.log("Form Data Submitted:", formData);
        alert("Booking submitted successfully!");
      } else {
        alert("reCAPTCHA verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
      alert("An error occurred. Please try again.");
    }

    recaptchaRef.current?.reset();
  };

  return (
    <div className="min-h-screen bg-blue-500">
      <div className="max-w-6xl mx-auto py-8 px-4 md:px-8 relative overflow-hidden">
        {/* Booking Form */}
        <h2 className="text-2xl font-bold text-white mb-6">Book Your Activity</h2>

        {/* Calendar Section */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            <button className="text-gray-500 hover:text-gray-700" aria-label="Previous Months">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700" aria-label="Next Months">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {months.map((month) => (
              <div key={month.name} className="flex-1 border-2 border-white rounded-lg p-2">
                <h2 className="text-lg font-semibold text-white text-center mb-2">{month.name}</h2>
                <div className="grid grid-cols-7 gap-1 text-center text-white font-medium">
                  <div>S</div>
                  <div>M</div>
                  <div>T</div>
                  <div>W</div>
                  <div>T</div>
                  <div>F</div>
                  <div>S</div>
                </div>
                <div className="grid grid-cols-7 gap-1 mt-2 text-center">
                  {Array(month.startDay).fill(null).map((_, i) => (
                    <div key={`empty-${i}`} className="p-2"></div>
                  ))}
                  {month.days.map((day) => {
                    const isSelected = selectedDate === new Date(
                      parseInt(month.name.split(" ")[1], 10),
                      new Date(`${month.name.split(" ")[0]} 1, ${month.name.split(" ")[1]}`).getMonth(),
                      day
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    });
                    return (
                      <div
                        key={day}
                        onClick={() => handleDateSelect(month.name, day)}
                        className={`p-2 rounded-full cursor-pointer ${
                          isSelected ? "bg-white text-blue-700 font-bold" : "text-white hover:bg-blue-600"
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-white">I don’t know my dates yet</p>
        </div>

        {/* Mobile-Optimized Selected Date and Time Slot Section */}
        <div className="md:hidden space-y-4 mb-8">
          {/* Selected Date */}
          <div>
            <label className="block text-sm font-medium text-white">Selected Date</label>
            <p className="text-white">{selectedDate || "No date selected"}</p>
          </div>

          {/* Time Slot Selection */}
          <div>
            <label htmlFor="timeSlot" className="block text-sm font-medium text-white">
              Select Time Slot
            </label>
            <select
              id="timeSlot"
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            >
              <option value="">Select a time slot</option>
              {availableTimeSlots.map((slot) => (
                <option key={slot} value={slot} className="text-black">
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Personal Details */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="pax" className="block text-sm font-medium text-white">
                Number of Pax
              </label>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => handlePaxChange("decrement")}
                  disabled={formData.pax <= 1}
                  className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                    formData.pax <= 1 ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"
                  }`}
                >
                  -
                </button>
                <div className="w-16 text-center px-3 py-2 border border-gray-300 rounded text-black bg-white">
                  {formData.pax}
                </div>
                <button
                  type="button"
                  onClick={() => handlePaxChange("increment")}
                  disabled={formData.pax >= 20}
                  className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                    formData.pax >= 20 ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"
                  }`}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Date and Time Selection (Hidden on Mobile) */}
          <div className="hidden md:block space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Selected Date</label>
              <p className="text-white">{selectedDate || "No date selected"}</p>
            </div>

            <div>
              <label htmlFor="timeSlot" className="block text-sm font-medium text-white">
                Select Time Slot
              </label>
              <select
                id="timeSlot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
              >
                <option value="">Select a time slot</option>
                {availableTimeSlots.map((slot) => (
                  <option key={slot} value={slot} className="text-black">
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LcTB-0qAAAAAL5KhgG0jQoTPyWNkCO6S9fFaamP" // Replace with your reCAPTCHA site key
                onChange={handleRecaptchaChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-white text-blue-700 py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Booking
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;