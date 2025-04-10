import React from "react";

// New Egypt ERIS Institution Page
export default function EgyptERISPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        ERIS (Eye of Ra Intelligence Service)
      </h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Institution Overview</h2>
        <p className="text-gray-300 mb-4">
          ERIS is New Egypt's elite intelligence and cyber warfare department,
          specializing in hacking, covert operations, and surveillance.
          Combining advanced technology with ancient wisdom, it is dedicated to
          protecting New Egypt's interests and uncovering secrets of competing
          civilizations.
        </p>
        <h3 className="text-xl font-semibold mb-2">Key Departments</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Cyber Operations Department (Alexandria)</li>
          <li>Signals Intelligence Department (Luxor)</li>
          <li>Research and Development Department (Memphis)</li>
          <li>Covert Operations Department (Thebes)</li>
          <li>Human Intelligence Department (Giza)</li>
          <li>Analysis Strategy Department (Heliopolis)</li>
          <li>Logistics Support Department (Aswan)</li>
        </ul>
      </div>
    </div>
  );
}
