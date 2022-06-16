import "./widget.scss";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">343029</span>
        <span className="link">watch all users</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowCircleUpOutlinedIcon />
          50 %
        </div>
        <GroupOutlinedIcon />
      </div>
    </div>
  );
};

export default Widget;
