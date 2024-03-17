import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  FileTextOutlined,
  LogoutOutlined,
  LaptopOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

  useEffect(() => {
    // Extract the key from the pathname (e.g., /message -> "message")
    const key = location.pathname.split("/")[1] || "dashboard";
    setSelectedMenuItem(key);
  }, [location]);

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <Sider width={200} className="hidden sm:block bg-gray-100">
      <Menu
        mode="inline"
        selectedKeys={[selectedMenuItem]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item
          key="dashboard"
          icon={<DashboardOutlined />}
          onClick={() => handleMenuClick("dashboard")}
        >
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          key="medicalRecords"
          icon={<FileTextOutlined />}
          onClick={() => handleMenuClick("medicalRecords")}
        >
          <Link to="/records">Medical Records</Link>
        </Menu.Item>
        <Menu.Item
          key="consultation"
          icon={<LaptopOutlined />}
          onClick={() => handleMenuClick("consultation")}
        >
          <Link to="/consultation">My Consultations</Link>
        </Menu.Item>
        {/* <Menu.Item
          key="message"
          icon={<MessageOutlined />}
          onClick={() => handleMenuClick("message")}
        >
          <Link to="/message">Message</Link>
        </Menu.Item> */}
        <Menu.Item
          key="logout"
          icon={<LogoutOutlined />}
          onClick={() => {localStorage.removeItem('userId');navigate('/auth');}}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
