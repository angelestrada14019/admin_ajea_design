import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
const Navbar = () => {
    const visibility =()=>{
        const element = document.querySelector("#sidebar");
        element.classList.toggle("visibility");

    }
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item transparent" onClick={visibility}>
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">
              <span>3</span>
            </div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">
              <span>3</span>
            </div>
          </div>

          <div className="item">
            <img
              src="https://img.freepik.com/free-vector/illustration-avatar-man-with-afro-hairstyle_53876-26806.jpg?t=st=1650006934~exp=1650007534~hmac=82a3bdceeefc962199d4f3b3f3670b7619cea8809aa43422c6fd83234fa7cffc&w=740"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
