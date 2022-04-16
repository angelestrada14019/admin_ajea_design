import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Link } from "react-router-dom";
const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin AJEA</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" className="link">
            <DashboardIcon className="icon"/>         
            <span>Dashboard</span>
        </Link>
          </li>
          <p className="title">LIST</p>
          <li>
            <Link to="/users" className="link">
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
        </Link>
          </li>
          <li>
            <Link to="/products" className="link">
            <StorefrontIcon className="icon" />
            <span>Products</span>
        </Link>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <TimelineIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="cont">
        <p className="title">Color options</p>
        <div className="button">
        <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
          
          
      </div>
    </div>
  );
};

export default sidebar;
