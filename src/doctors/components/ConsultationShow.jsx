import React, { useState } from 'react';
import { Tabs, Card, Button  } from 'antd';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

export default function ConsultationShow({ requests, completed }) {
    const [activeTab, setActiveTab] = useState('Current');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleAccept = (id) => {
        // Logic to accept consultation request
    };
    
    const handleReject = (id) => {
        // Logic to reject consultation request
    };

    return (
        <div>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane 
            tab={ "Current" }
            key="Current"
        >
            <div className="w-full p-4">
                <h2 className="text-2xl font-semibold mb-4">Consultation Requests</h2>
                {requests.map((request) => (
                    <Card key={request.id} className="mb-4" title={`Patient: ${request.patientName}`}>
                    <p>Date: {request.date}</p>
                    <p>Symptoms: {request.symptoms}</p>
                    <p>Notes: {request.notes}</p>
                    <Button type="primary" className="bg-[blue] mr-2" onClick={() => handleAccept(request.id)}>
                        <Link to="/recordfill">Complete</Link>
                    </Button>
                    </Card>
                ))}
            </div>
        </TabPane>
        <TabPane tab="History" key="History">
            <div className="w-full p-4">
                <h2 className="text-2xl font-semibold mb-4">Consultation Requests</h2>
                {completed.map((request) => (
                    <Card key={request.id} className="mb-4" title={`Patient: ${request.patientName}`}>
                        <p>Date: {request.date}</p>
                        <p>Symptoms: {request.symptoms}</p>
                        <p>Notes: {request.notes}</p>
                    </Card>
                ))}
            </div>
        </TabPane>
      </Tabs>
    </div>
    );
}
