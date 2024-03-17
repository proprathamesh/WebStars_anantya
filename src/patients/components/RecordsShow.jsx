import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const RecordsShow = () => {
  const [records, setColumns] = useState([])

  const columns = [
    {
      title: 'Date of Visit',
      dataIndex: 'dateOfVisit',
      key: 'dateOfVisit',
    },
    {
      title: 'Diagnosis',
      dataIndex: 'diagnosis',
      key: 'diagnosis',
    },
    {
      title: 'Treatment',
      dataIndex: 'treatment',
      key: 'treatment',
    },
    {
      title: 'Medication',
      dataIndex: 'medication',
      key: 'medication',
    },
    {
      title: 'Other Information',
      dataIndex: 'otherInfo',
      key: 'otherInfo',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  useEffect(() => {
      try {
        // Send a POST request to your API endpoint with the form data
        axios.get('http://localhost:3000/api/medical-records/')
        
          .then(response => {
            console.log(response.data)
            setColumns(response.data.filter(user => user.patientId === localStorage.getItem('userId')))
          }).

        console.log('Form submission successful:', response.data);
        // Handle success, e.g., show a success message or redirect the user
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error, e.g., show an error message to the user
      }
  }, [])

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Medical Records</h3>
          </div>
          <div className="border-t border-gray-200">
            <Table dataSource={records} columns={columns} pagination={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordsShow;
