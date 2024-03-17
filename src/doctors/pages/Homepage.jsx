import React, {useEffect} from 'react';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;

const Homepage = () => {

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
          <Content className="p-4 ">
            <div className='flex flex-row flex-wrap justify-evenly items-center'>
            <div className='bg-[white] w-56 py-10 border shadow-lg rounded m-4'>
              <p className='text-center text-lg'>Consultations <br /> Completed</p>
              <p className='text-center text-4xl'>2</p>
            </div>
            <div className='bg-[white] w-56 py-10 border shadow-lg rounded m-4'>
              <p className='text-center text-lg'>Consultations <br /> Remaining</p>
              <p className='text-center text-4xl'>2</p>
            </div>
            <div className='bg-[white] w-56 py-10 border shadow-lg rounded m-4'>
              <p className='text-center text-lg'>Consultations <br /> Rejected</p>
              <p className='text-center text-4xl'>0</p>
            </div>
            </div>
          </Content>
          <Footer className="text-center bg-gray-200 p-4">Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Homepage;
