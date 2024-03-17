import React, {useEffect} from 'react';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;

const ProfilePage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
  
    if (!userId) {
      navigate('/auth/');
    }
  }, []);

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
