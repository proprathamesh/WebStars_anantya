import React from 'react';
import { Card, Button } from "antd";


const RecordsShow = ({ requests }) => {
  const handleAccept = (id) => {
    // Logic to accept consultation request
  };

  const handleReject = (id) => {
    // Logic to reject consultation request
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-semibold mb-4">Consultation Requests</h2>
      {requests.map((request) => (
        <Card key={request.id} className="mb-4" title={`Patient: ${request.patientName}`}>
          <p>Date: {request.date}</p>
          <p>Symptoms: {request.symptoms}</p>
          <p>Notes: {request.notes}</p>
          <Button type="primary" className="bg-[blue] mr-2" onClick={() => handleAccept(request.id)}>
            Accept
          </Button>
          <Button  danger onClick={() => handleReject(request.id)}>
            Reject
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default RecordsShow;
