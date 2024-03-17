import React, {useEffect, useState} from 'react';
import { Layout, Breadcrumb, Card, Button } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;

const Homepage = () => {

  const navigate = useNavigate();
  const [userWithEmail, setUserWithEmail] = useState([])

  useEffect(() => {
    const userId = localStorage.getItem('userId');
  
    if (!userId) {
      navigate('/auth/');
    }

    const url = 'http://localhost:3000/api/users/';
    const headers = {
        'Content-Type': 'application/json',
    };
    // Make the POST request with Axios
    axios.get(url, {
        headers: headers,
    })
        .then(response => {
            // Handle the response data
            console.log('Response:', response.data);
            const filteredDoctors = response.data.filter(user => user.role === 'doctor');
            setUserWithEmail(filteredDoctors);
        })
        .catch(error => {
            console.error('Error found as:', error);
        });
    
  }, []);

  const handlePermission = (doctorId) => {
    
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout>
          <Content className="p-4">
            <Breadcrumb style={{ margin: '16px 0' }} className="mb-4">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Doctors</Breadcrumb.Item>
            </Breadcrumb>
            <div className="flex flex-wrap">
              {userWithEmail.map((_, index) => (
                <Card key={index} className="w-full mb-4">
                  <p>Doctor {index + 1}</p>
                  <p>Description of Doctor {index + 1}</p>
                  <Button type="primary" onclick={() => {handlePermission(_._id)}} className="bg-[blue] mr-2">Consult</Button>
                  <Button type="default">View Profile</Button>
                </Card>
              ))}
            </div>
          </Content>
          <Footer className="text-center bg-gray-200 p-4">Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Homepage;
