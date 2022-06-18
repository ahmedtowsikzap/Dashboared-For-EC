import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">
          Total Revenue
          <MoreVertIcon fontSize="small" />
        </h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={59} text={"59%"} strokeWidth={5} />
        </div>
        <p className="title">Made today</p>
        <p className="amount">$987</p>
        <p className="desc">Transaction processing</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$9.1K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last 3 days</div>
            <div className="itemResult negitive">
              <ArrowDropDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">-$3.1K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$19.1K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
