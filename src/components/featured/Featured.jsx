import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Featured = () => {
  return (
    <div className="featured box-shadow">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon className="icon" />
      </div>
      <div className="button">
        <div className="featured_chart">
          <CircularProgressbar value={75} text={`75%`} strokeWidth={4} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$1,000,000</p>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
          molestiae!
        </p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon className="icon" />
                    <div className="resultAmount">$1k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon className="icon" />
                    <div className="resultAmount">$1k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon className="icon" />
                    <div className="resultAmount">$1k</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
