import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';
import { FaUser, FaDollarSign, FaUsers, FaCalculator, FaShieldAlt, FaChartLine, FaExchangeAlt, FaTicketAlt } from 'react-icons/fa';
import '../css/Sidebar.css';

const AppSidebar = ({ collapsed }) => {
  return (
    <ProSidebarProvider>
      <Sidebar collapsed={collapsed}>
        <div className="sidebar-content">
          {!collapsed && (
            <div className="sidebar-header flex flex-col mt-6 mb-4">
              <img src="logo.png" alt="Mantis Logo" className="sidebar-logo" />
            </div>
          )}
          <Menu iconShape="circle">
            {!collapsed && <p className="menu-category text-gray-500 text-xs uppercase px-4">Profile</p>}
            <MenuItem icon={<FaUser />} href='/user'>Profile Creation</MenuItem>

            {!collapsed && <p className="menu-category text-gray-500 text-xs uppercase px-4 mt-4">Dashboard</p>}
            <SubMenu label="Dashboard" icon={<FaUsers />}>
              <MenuItem href='/admin'>Admin Dashboard</MenuItem>
              <MenuItem href='/owner'>Owner Dashboard</MenuItem>
              <MenuItem href='/owner'>Employee Dashboard</MenuItem>
              <MenuItem href='/owner'>Branch Manager Dashboard</MenuItem>
              <MenuItem href='/owner'>Members Dashboard</MenuItem>
            </SubMenu>

            {!collapsed && <p className="menu-category text-gray-500 text-xs uppercase px-4 mt-4">Chit Groups</p>}
            <SubMenu label="Chit Groups" icon={<FaUsers />}>
              <MenuItem>Chit Group Creation</MenuItem>
              <MenuItem>Daily Chit Group</MenuItem>
            </SubMenu>

            {!collapsed && <p className="menu-category text-gray-500 text-xs uppercase px-4 mt-4">Calculations</p>}
            <MenuItem className='text-xs' icon={<FaCalculator />}>Auction Slab Calculation</MenuItem>

            {!collapsed && <p className="menu-category text-gray-500 text-xs uppercase px-4 mt-4">Guarantees</p>}
            <MenuItem icon={<FaShieldAlt />}>Subscriber's Guarantee</MenuItem>

            {!collapsed && <p className="menu-category text-gray-500 text-xs uppercase px-4 mt-4">Finance</p>}
            <MenuItem icon={<FaChartLine />}>Finance Profile Valuation</MenuItem>

            {!collapsed && <p className="menu-category text-gray-500 text-xs uppercase px-4 mt-4">Loans</p>}
            <MenuItem icon={<FaExchangeAlt />}>Chit Against Loan</MenuItem>

            {!collapsed && <p className="menu-category text-gray-500 text-xs uppercase px-4 mt-4">Tickets</p>}
            <MenuItem icon={<FaTicketAlt />}>Selling a Chit Fund Ticket</MenuItem>

            {!collapsed && (
              <div className="user-profile flex flex-col items-center mt-6">
                <img src="avatar.png" alt="User Avatar" className="user-avatar w-12 h-12 rounded-full mb-2" />
                <span className="user-name text-sm font-medium">MobiFish User</span>
                <span className="user-role text-xs text-gray-500">UI/UX Designer</span>
              </div>
            )}
          </Menu>
        </div>
      </Sidebar>
    </ProSidebarProvider>
  );
};

export default AppSidebar;
