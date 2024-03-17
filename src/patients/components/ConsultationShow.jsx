import React, { useState, useEffect } from 'react';
import { Tabs, Table } from 'antd';
import axios from 'axios';

const { TabPane } = Tabs;

export default function ConsultationShow() {
    const [activeTab, setActiveTab] = useState('Current');
    const [active, setactive] = useState([])
    const [history, sethistory] = useState([])

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

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
          // Send a POST request to your API endpoint with the form data
          axios.get('http://localhost:3000/api/medical-records/')
          
            .then(response => {
              console.log(response.data)
              setactive(response.data.filter(user => user.patientId === localStorage.getItem('userId') && user.status === 'pending'));
              sethistory(response.data.filter(user => user.patientId === localStorage.getItem('userId') && user.status === 'done'));

            })
            .catch(error => {

                console.log('Form submission successful:', error);
            })
  
    }, [])

    return (
        <div>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane 
            tab={ "Current" }
            key="Current"
        >
            <div className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Medical Records</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <Table dataSource={active} columns={columns} pagination={false} />
                    </div>
                    </div>
                </div>
            </div>
        </TabPane>
        <TabPane tab="History" key="History">
            <div className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Medical Records</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <Table dataSource={history} columns={columns} pagination={false} />
                    </div>
                    </div>
                </div>
            </div>
        </TabPane>
      </Tabs>
    </div>
    );
}
