'use client'; 

import { useState } from 'react';
import dynamic from 'next/dynamic';

const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

export default function Home() {
  const [showButtons, setShowButtons] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo */}
      <div className="mt-10">
        <img src="/logo.png" alt="Logo" className="h-16" />
      </div>

      {/* Liput */}
      <div className="flex space-x-4 mt-4">
        <img src="/fi.png" alt="Suomi" className="h-8" />
        <img src="/gb.png" alt="Englanti" className="h-8" />
        <img src="/se.png" alt="Ruotsi" className="h-8" />
      </div>

      {/* Otsikkoteksti ja kappaleteksti */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <p className="mt-2 text-lg">Choose salon and chair</p>
      </div>

      {/* Helsinki nappi */}
      <div className="mt-6">
        <button
          onClick={() => setShowButtons(!showButtons)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Helsinki
        </button>
      </div>

      {/* Sarakkeet ja napit */}
      {showButtons && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[...Array(8)].map((_, i) => (
            <button
              key={i}
              onClick={() => setShowCalendar(true)}
              className="px-4 py-2 bg-gray-200 text-black rounded"
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Kalenteri */}
      {showCalendar && (
        <div className="mt-6">
          <Calendar />
        </div>
      )}
    </div>
  );
}
