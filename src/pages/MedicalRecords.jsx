import React from 'react';
import { Button, Layout } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import RecordsShow from '../components/RecordsShow';
import { Link } from "react-router-dom";

const { Content, Footer } = Layout;

const MedicalRecords = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout>
          <Content className="p-4">
            <Button type="primary" className='bg-[blue] mx-10 mt-5'><Link to="/recordfill">Add Record</Link></Button>
            <RecordsShow />
          </Content>
          <Footer className="text-center bg-gray-200 p-4">Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MedicalRecords;
