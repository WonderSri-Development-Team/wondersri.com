"use client"; // Removed trailing space

import { useState } from 'react';
import Image from 'next/image';

// Define the type for booking data
interface Booking {
  id: number;
  date: string;
  service: string;
}

interface BookingData {
  code: string;
  bookings: Booking[];
}

export default function BookingLookup() {
  const [code, setCode] = useState<string>(''); // Explicit type annotation
  const [bookings, setBookings] = useState<BookingData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Added form element type
    e.preventDefault();
    
    // Simulate API call with timeout for realism
    setTimeout(() => {
      const mockData: BookingData = {
        code: code,
        bookings: [
          { id: 1, date: '2023-10-15', service: 'Spa Treatment' },
          { id: 2, date: '2023-10-20', service: 'Dinner Reservation' },
        ]
      };
      setBookings(mockData);
    }, 500); // 500ms delay to simulate network request
  };

  return (
    <div className="min-h-screen bg-[url('/boats.png')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-black/50 p-8 rounded-lg space-y-6 w-full max-w-md">
        <Image 
          src="/logo.png"
          alt="WonderSri Logo"
          width={150}
          height={150}
          className="mx-auto"
          priority // Added priority for better LCP
        />
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your booking code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-3 rounded bg-white/10 border border-blue-300/30 focus:border-blue-400 focus:outline-none transition"
            required // Added required attribute
          />
          <button 
            type="submit"
            className="w-full bg-[#4096FE] hover:bg-[#2B78FE] text-white py-3 rounded transition duration-200"
            style={{ boxShadow: '0 4px 6px rgba(64, 150, 254, 0.3)' }}
            disabled={!code} // Disable when no code entered
          >
            View Bookings
          </button>
        </form>

        {bookings && (
          <div className="bg-white/95 p-4 rounded space-y-2">
            <h3 className="text-lg font-semibold text-[#2B78FE]">Bookings for {bookings.code}</h3>
            {bookings.bookings.map((booking) => (
              <div key={booking.id} className="p-3 bg-white rounded shadow-sm border border-blue-100">
                <p className="font-medium text-[#2B78FE]">{booking.service}</p>
                <p className="text-sm text-gray-600">{booking.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}