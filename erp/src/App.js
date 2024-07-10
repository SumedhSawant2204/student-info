import React, { useState } from 'react';
import StudentInfo from './components/StudentInfo';
import TpoTable from './components/ERP';


const studentData = [
  {
    tpo_id: "123456",
    clg_id: "7890",
    branch: "Computer Science",
    mobile: "123-456-7890",
    gender: "Male",
    degree: "B.Tech",
    dob: "01-01-2000",
    loc: "New York",
    ssc_per: "85%",
    ssc_year: "2016",
    hsc_per: "88%",
    hsc_year: "2018",
    diploma_per: "90%",
    diploma_year: "2017",
    degree_per: "80%",
    degree_cgpa: "8.0",
    degree_year: "2022",
    resume: "link_to_resume.pdf",
  },
  // Add more student data here as needed
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudent, setFilteredStudent] = useState(null);

  const handleSearch = () => {
    const foundStudent = studentData.find(student =>
      Object.values(student).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredStudent(foundStudent);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student Information</h2>
      <div className="mb-6 flex flex-wrap gap-6 justify-center w-full">
        <input
          type="text"
          placeholder="Search student details..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Search
        </button>
      </div>
      {filteredStudent ? <StudentInfo student={filteredStudent} /> : <div>No student found</div>}
    </div>
  );

  return (
    <div>
      <StudentInfo />
      <TpoTable />
    </div>
  );
};

export default App;
