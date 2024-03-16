import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  MenuOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

export default function Navbar() {

    const [drawerVisible, setDrawerVisible] = useState(false);
    const location = useLocation();
    const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

    useEffect(() => {
        // Extract the key from the pathname (e.g., /message -> "message")
        const key = location.pathname.split("/")[1] || "dashboard";
        setSelectedMenuItem(key);
    }, [location]);

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const handleMenuClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

  return (
    <div>
      <Header className="bg-[#2a7fba] shadow-md flex justify-between items-center p-4 sm:px-14 text-white">
        <div className="text-xl font-bold">Your App Name</div>
        <Button className="sm:block hidden text-white" icon={<UserOutlined />}>
          <Link to="/profile">Profile</Link>
        </Button>
        <Button
          className="sm:hidden border border-white text-white"
          type="text"
          onClick={toggleDrawer}
          icon={<MenuOutlined />}
        />
      </Header>
      <Drawer
        title="Menu"
        placement="left"
        onClose={toggleDrawer}
        open={drawerVisible}
        className="sm:hidden"
      >
        <Menu
          mode="inline"
          selectedKeys={[selectedMenuItem]}
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="dashboard" icon={<UserOutlined />} onClick={() => handleMenuClick("dashboard")}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="medicalRecords" icon={<LaptopOutlined />} onClick={() => handleMenuClick("medicalRecords")}>
            <Link to="/records">Medical Records</Link>
          </Menu.Item>
          <Menu.Item key="consultation" icon={<LaptopOutlined />} onClick={() => handleMenuClick("consultation")}>
            <Link to="/consultation">My Consultations</Link>
          </Menu.Item>
          <Menu.Item key="message" icon={<NotificationOutlined />} onClick={() => handleMenuClick("message")}>
            <Link to="/message">Message</Link>
          </Menu.Item>
          <Menu.Item key="logout" icon={<NotificationOutlined />} onClick={() => handleMenuClick("message")}>
            <Link to="/logout">Message</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
}
