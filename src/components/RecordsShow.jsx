import React from 'react';
import { Table } from 'antd';

const RecordsShow = ({ records }) => {
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
  ];

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
