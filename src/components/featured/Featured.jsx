import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
      </div>
    </div>
  );
};

export default Featured;
