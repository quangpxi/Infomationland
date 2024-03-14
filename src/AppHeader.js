import React, { useState, useEffect } from 'react';
import { Layout, Button, Badge, Avatar, Dropdown, Menu } from 'antd';
import { BellOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';

import './App.css'; 

const { Header } = Layout;

const AppHeader = ({ onSearch, hasUnreadNotification }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('normal');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('userRole');
    if (loggedIn === 'true' && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const handleLogin = () => {
    setUserRole('normal');
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', 'normal');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userRole');
  };

  const handleUserProfile = () => {
    // Redirect user to user profile page
    navigate('/user-profile');
  };

  const handleSwitchToNotary = () => {
    setUserRole('notary');
    localStorage.setItem('userRole', 'notary');
  };

  const handleMenuClick = (menu) => {
    // Handle menu item click
    console.log("Menu item clicked:", menu.key);
    if (menu.key === 'home') {
      window.location.href = '/'; // Refresh lại trang chủ
    } else if (menu.key === 'logout') {
      handleLogout(); // Xử lý đăng xuất khi click vào logout
    }
  };



  const handleLogoClick = () => {
    // Handle logo click
    window.location.href = '/';
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="home" onClick={handleMenuClick}>Trang chủ</Menu.Item>
      <Menu.Item key="about" onClick={handleMenuClick}>About us</Menu.Item>
      <Menu.Item key="search" onClick={handleMenuClick}>Tra cứu</Menu.Item>
      <Menu.Item key="post" onClick={handleMenuClick}>Đăng tin</Menu.Item>
    </Menu>
  );

  const menuItems = [
    <Menu.Item key="1" onClick={handleUserProfile}>Thông tin người dùng</Menu.Item>,
  ];

  if (userRole === 'notary') {
    menuItems.push(
      <Menu.Item key="2">Danh sách tài sản</Menu.Item>,
      <Menu.Item key="3">Quản lý bài đăng</Menu.Item>,
      <Menu.Item key="4">Quản lý người dùng</Menu.Item>,
      <Menu.Item key="5">Số hóa tài sản</Menu.Item>
    );
  } else {
    menuItems.push(
      <Menu.Item key="2">Danh sách tài sản</Menu.Item>
    );
  }

  menuItems.push(
    <Menu.Item key="logout" onClick={handleLogout}>Đăng xuất</Menu.Item>
  );
  // Header layout
  return (
    <Header className="header">
      <div className="flexDisplay flex1">
        <img src="batdongsanlogosblack.png" alt="Logo" className="logo" onClick={handleLogoClick} />
       
      </div>
      <div className="flexDisplay">
        <Badge dot={hasUnreadNotification} className="mr20">
          <BellOutlined className="mr20" />
        </Badge>
        <Dropdown overlay={menu} placement="topRight" trigger={['hover']}>
          <Button type="text" icon={<MenuOutlined />} className="mr20" />
        </Dropdown>
        {isLoggedIn ? (
          <Dropdown overlay={<Menu>{menuItems}</Menu>} trigger={['click']}>
            <div className="flexDisplay" style={{ cursor: 'pointer' }}>
              <Avatar icon={<UserOutlined />} className="mr20" />
              <span>{userRole === 'normal' ? 'Người dùng' : 'Notary'}</span>
            </div>
          </Dropdown>
        ) : (
          <Button type="text" onClick={handleLogin} className="textButton">Đăng nhập</Button>
        )}
        <Button onClick={handleSwitchToNotary} className="switchButton">Chuyển sang Notary</Button>
      </div>
      </Header>
  );
}

export default AppHeader;