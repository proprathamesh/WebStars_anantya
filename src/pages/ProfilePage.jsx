import React from 'react';
import { Layout, Breadcrumb, Card, Button } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';

const { Content, Footer } = Layout;

const ProfilePage = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout>
          <Content className="p-4">
            <Profile />
          </Content>
          <Footer className="text-center bg-gray-200 p-4">Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default ProfilePage;
