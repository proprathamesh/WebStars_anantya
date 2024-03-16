import React from 'react';
import { Layout, Breadcrumb, Card, Button } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const { Content, Footer } = Layout;

const Homepage = () => {

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
              {[...Array(5)].map((_, index) => (
                <Card key={index} className="w-full mb-4">
                  <p>Doctor {index + 1}</p>
                  <p>Description of Doctor {index + 1}</p>
                  <Button type="primary" className="mr-2">Consult</Button>
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
