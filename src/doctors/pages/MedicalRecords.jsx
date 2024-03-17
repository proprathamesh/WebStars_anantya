import React, {useEffect} from 'react';
import { Button, Layout } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import RecordsShow from '../components/RecordsShow';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;

const MedicalRecords = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
  
    if (!userId) {
      navigate('/auth/');
    }
  }, []);

  const consultationRequests = [
    {
      id: 1,
      patientName: 'John Doe',
      date: '2024-03-25',
      symptoms: 'Fever, headache',
      notes: 'Patient has been experiencing fever and headache for the past two days.',
    },
    {
      id: 2,
      patientName: 'Alice Smith',
      date: '2024-03-26',
      symptoms: 'Cough, sore throat',
      notes: 'Patient reports coughing and sore throat for the past week.',
    },
    // Add more consultation requests as needed
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout>
          <Content className="p-4">
            <RecordsShow requests={consultationRequests} />
          </Content>
          <Footer className="text-center bg-gray-200 p-4">Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MedicalRecords;
