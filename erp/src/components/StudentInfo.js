import React, { useState } from 'react';

const fieldToColumnName = {
  tpo_id: "TPO ID ",
  clg_id: "College ID",
  branch: "Branch",
  mobile: "Mobile",
  gender: "Gender",
  degree: "Degree",
  dob: "Date of Birth",
  loc: "Location",
  ssc_per: "SSC Percentage",
  ssc_year: "SSC Year",
  hsc_per: "HSC Percentage",
  hsc_year: "HSC Year",
  diploma_per: "Diploma Percentage",
  diploma_year: "Diploma Year",
  degree_per: "Degree Percentage",
  degree_cgpa: "Degree CGPA",
  degree_year: "Degree Year",
  resume: "Resume",
};

const StudentInfo = ({ student }) => {
  const [showRegistered, setShowRegistered] = useState(false);
  const [showPlaced, setShowPlaced] = useState(false);

  const handleShowRegistered = () => {
    setShowRegistered(!showRegistered);
    setShowPlaced(false);
  };

  const handleShowPlaced = () => {
    setShowPlaced(!showPlaced);
    setShowRegistered(false);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 border border-gray-100 rounded-md">
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {Object.keys(fieldToColumnName).map((field) => (
          <div key={field} className="bg-white border border-gray-100 rounded-md p-4 w-60 inline-block">
            <div className="font-semibold mb-2">{fieldToColumnName[field]}:</div>
            <div className="break-words">
              {field === "resume" ? (
                <a href={student[field]} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View Resume
                </a>
              ) : (
                student[field]
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleShowRegistered}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {showRegistered ? 'Hide Registered Company' : 'Show Registered Company'}
        </button>
        <button
          onClick={handleShowPlaced}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {showPlaced ? 'Hide Placed Company' : 'Show Placed Company'}
        </button>
      </div>
      {showRegistered && <div className="mt-4 p-4 border border-gray-300 rounded-md w-full text-center bg-gray-200">Registered Company Info Here</div>}
      {showPlaced && <div className="mt-4 p-4 border border-gray-300 rounded-md w-full text-center bg-gray-200">Placed Company Info Here</div>}
    </div>
  );
};

export default StudentInfo;
