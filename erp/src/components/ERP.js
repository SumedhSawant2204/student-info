import React from 'react';

const TpoTable = ({ columns, companyDetails, studentDetails, isStudentEligible, isStudentRegistered, isStudentPlaced }) => {
  return (
    <div className="table-container mx-4 overflow-x-auto">
      <table className="min-w-full border-collapse text-left">
        <thead>
          <tr className='place-content-center'>
            {columns.map((column, index) => (
              <th
                key={column}
                className="border border-gray-300 bg-blue-500 text-white px-3 py-2"
                rowSpan={index < columns.length ? 2 : 1}
              >
                {column}
              </th>
            ))}
            {companyDetails.map((company, index) => (
              <th
                key={index}
                className="border border-gray-300 bg-blue-500 text-white px-3 py-2"
                colSpan={3}
              >
                {company.name}
              </th>
            ))}
          </tr>
          <tr>
            {companyDetails.map((company, index) => (
              <React.Fragment key={index}>
                <th className="border border-gray-300 bg-blue-500 text-white px-3 py-2">E</th>
                <th className="border border-gray-300 bg-blue-500 text-white px-3 py-2">R</th>
                <th className="border border-gray-300 bg-blue-500 text-white px-3 py-2">P</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student, index) => (
            <tr key={student.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex} className="border px-4 py-2">{student[column]}</td>
              ))}
              {companyDetails.map((company, companyIndex) => (
                <React.Fragment key={companyIndex}>
                  <td className="border px-4 py-2">
                    {isStudentEligible(student.id, company.id) ? 1 : 0}
                  </td>
                  <td className="border px-4 py-2">
                    {isStudentRegistered(student.id, company.id) ? 1 : 0}
                  </td>
                  <td className="border px-4 py-2">
                    {isStudentPlaced(student.id, company.id) ? 1 : 0}
                  </td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TpoTable;
