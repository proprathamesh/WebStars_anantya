import { useState } from 'react';
import { Tabs, Input, Button, Alert, Select  } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { UserOutlined, LockOutlined, MailOutlined, EyeTwoTone, EyeInvisibleOutlined, EyeOutlined, PhoneOutlined   } from '@ant-design/icons';

const { TabPane } = Tabs;

const AuthenticationPage = () => {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('login');
    const [errorLog, setErrorLog] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleTabChange = (key) => {
        setActiveTab(key);
        setErrorLog('');
    };

    const handleLogin = () => {
        const url = 'http://localhost:3000/api/users/';
        const headers = {
            'Content-Type': 'application/json',
        };

        // Make the POST request with Axios
        axios.get(url, {
            headers: headers,
        })
            .then(response => {
                console.log('removed');

                localStorage.removeItem('userId');
                // Handle the response data
                console.log('Response:', response.data);
                const userWithEmail = response.data.find(user => user.email === email);
                if (!userWithEmail) {
                    setErrorLog("User not found.")
                    return;
                }
                localStorage.setItem('userId', userWithEmail._id)
                window.location.href = '/';

            })
            .catch(error => {
                console.error('Error found as:', error);
                let errorMessage =  error.response?.data?.username === undefined ? error.response?.data?.non_field_errors[0] : error.response?.data?.username[0];
                setErrorLog(errorMessage)
            });
    };

    const handleRegister = () => {
        // Add your register logic here
        if (newPassword !== confirmPassword) {
            setErrorLog('Passwords do not match with Confirm Password')
            return;
        }

        const url = 'http://localhost:3000/api/users/';
        const headers = {
            'Content-Type': 'application/json',
        };
        const data = {
            name: firstName,
            email: email,
            password: newPassword,
            role: role,
          };

        // Make the POST request with Axios
        axios.post(url, JSON.stringify(data), {
            headers: headers,
        })
            .then(response => {
                // Handle the response data
                console.log('Response:', response.data);
                handleTabChange('login');
            })
            .catch(error => {
                console.error('Error found as:', error);
                let errorMessage = 'Some error occurred.';
                setErrorLog(errorMessage)
            });
    };

    return (
        <div className="absolute inset top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border p-10 rounded-lg shadow-lg bg" >
            <h1 className='text-center text-3xl mb-5'>MedConnect</h1>
            <div className="flex justify-center align-center authentication-page">
                <Tabs className='flex justify-center align-center' activeKey={activeTab} onChange={handleTabChange}>
                    <TabPane className='flex justify-center align-center' tab="Login" key="login">
                        <div className='space-y-6 w-[300px]'>

                            {errorLog !== '' && (
                                <Alert message={errorLog} type="error" showIcon closable onClose={() => setErrorLog('')} />
                            )}

                            <div>
                                <Input
                                    className='text-center rounded-none'
                                    placeholder="Username"
                                    prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <Input.Password
                                    className='text-center rounded-none'
                                    placeholder="Password"
                                    prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                                    suffix={<EyeOutlined style={{ color: '#1890FF' }} />}
                                    style={{ textAlign: 'center' }}
                                    type="password"
                                    value={password}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <Button type='primary' className="bg-[#1890FF] primary-6 text-white px-6 rounded" onClick={handleLogin}>
                                    Sign in
                                </Button>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Register" key="register">
                        <div className='space-y-6 w-[300px]'>

                            {errorLog !== '' && (
                                <Alert message={errorLog} type="error" showIcon closable onClose={() => setErrorLog('')} />
                            )}

                            <div>
                                <Input
                                    className='text-center rounded-none'
                                    placeholder="Name"
                                    prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div>
                                <Input
                                    className='text-center rounded-none'
                                    placeholder="Email"
                                    prefix={<MailOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <Select
                                    className='w-full'
                                    showSearch
                                    placeholder="Select Role"
                                    onChange={(value) => setRole(value)}
                                    options={[
                                            {
                                                label: 'Doctor',
                                                value: 'doctor',
                                            },
                                            {
                                                label: 'Patient',
                                                value: 'patient',
                                            },
                                            
                                        ]
                                    }
                                />
                            </div>

                            <div>
                                <Input.Password
                                    className='text-center rounded-none'
                                    placeholder="Password"
                                    prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                                    style={{ textAlign: 'center' }}
                                    type="password"
                                    value={newPassword}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <Input.Password
                                    className='text-center rounded-none'
                                    placeholder="Confirm Password"
                                    prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                                    style={{ textAlign: 'center' }}
                                    type="password"
                                    value={confirmPassword}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <Button type='primary' className="bg-[#1890FF] primary-6 text-white px-6 rounded" onClick={handleRegister}>
                                    Register
                                </Button>
                            </div>
                            </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default AuthenticationPage;
