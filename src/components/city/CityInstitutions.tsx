import React from "react";
import Link from "next/link";

interface Institution {
  id: string;
  name: string;
  description: string;
  headquarters?: string;
  departments?: {
    name: string;
    location: string;
    specialization: string;
  }[];
  link: string;
}

interface CityInstitutionsProps {
  institutions: Institution[];
  headingColor: string;
  accentColor: string;
  sectionColor: string;
  buttonColor: string;
  civilization: string;
}

const CityInstitutions: React.FC<CityInstitutionsProps> = ({
  institutions,
  sectionColor,
  buttonColor,
}) => {
  if (!institutions || institutions.length === 0) return null;

  // City Institutions Section Component
  return (
    <div className="my-16">
      <h2 className={`text-3xl font-bold mb-6 ${sectionColor}`}>
        Institutions
      </h2>
      <div className="grid grid-cols-1 gap-8">
        {institutions.map((institution) => (
          <div
            key={institution.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h3 className={`text-xl font-bold ${sectionColor} mb-2`}>
                  {institution.name}
                </h3>
                <p className="text-gray-300 mb-4">{institution.description}</p>

                {/* Headquarters Information (if available) */}
                {institution.headquarters && (
                  <div className="mb-4">
                    <h4 className="text-gray-400 font-medium mb-1">
                      Headquarters
                    </h4>
                    <p className="text-gray-300">{institution.headquarters}</p>
                  </div>
                )}

                {/* Department Information (if available) */}
                {institution.departments &&
                  institution.departments.length > 0 && (
                    <div>
                      <h4 className="text-gray-400 font-medium mb-1">
                        Departments
                      </h4>
                      <ul className="list-disc list-inside text-gray-300">
                        {institution.departments?.map((dept, deptIndex) => (
                          <li key={deptIndex}>
                            <div className="text-gray-300">
                              <p className="font-medium">{dept.name}</p>
                              <p className="text-sm">{dept.location}</p>
                              <p className="text-sm">{dept.specialization}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>

              {institution.link && (
                <Link
                  href={institution.link}
                  className={`${buttonColor} text-sm px-4 py-2 rounded inline-block mt-4 md:mt-0`}
                >
                  Learn More
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityInstitutions;
