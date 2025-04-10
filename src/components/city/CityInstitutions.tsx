import React from "react";

export interface Institution {
  name: string;
  description: string;
  headquarters?: string;
  departments?: {
    name: string;
    location: string;
    specialization: string;
  }[];
}

interface CityInstitutionsProps {
  institutions: Institution[];
  headingColor: string;
  accentColor: string;
  sectionColor: string;
}

// 도시 기관 섹션 컴포넌트
const CityInstitutions: React.FC<CityInstitutionsProps> = ({
  institutions,
  headingColor,
  accentColor,
  sectionColor,
}) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">
        Main Institutions
      </h2>
      <div className="space-y-6">
        {institutions.map((institution, idx) => (
          <div
            key={idx}
            className={`bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700`}
          >
            <h3 className={`text-xl font-semibold ${headingColor} mb-3`}>
              {institution.name}
            </h3>
            <p className="text-gray-300 mb-4">{institution.description}</p>

            {/* 본부 정보 (있는 경우) */}
            {institution.headquarters && (
              <div className="mb-4">
                <h4 className={`text-lg font-medium ${accentColor} mb-2`}>
                  Headquarters
                </h4>
                <p className="text-gray-400">{institution.headquarters}</p>
              </div>
            )}

            {/* 부서 정보 (있는 경우) */}
            {institution.departments && institution.departments.length > 0 && (
              <div>
                <h4 className={`text-lg font-medium ${accentColor} mb-3`}>
                  Departments
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {institution.departments.map((dept, deptIdx) => (
                    <div key={deptIdx} className="bg-gray-700 p-4 rounded-lg">
                      <h5 className={`font-medium ${sectionColor} mb-1`}>
                        {dept.name}
                      </h5>
                      <p className="text-sm text-gray-400 mb-2">
                        Location: {dept.location}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {dept.specialization}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityInstitutions;
