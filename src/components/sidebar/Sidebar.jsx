import "./sidebar.scss";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">React Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardSharpIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <GroupOutlinedIcon />
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsOutlinedIcon />
            <span>Products</span>
          </li>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <span>Delivery</span>
          </li>
          <li>
            <span>Stats</span>
          </li>
          <li>
            <span>Notification</span>
          </li>
          <li>
            <span>Health</span>
          </li>
          <li>
            <span>Logs</span>
          </li>
          <li>
            <span>Settings</span>
          </li>
          <li>
            <span>Logout</span>
          </li>
          <li>
            <span>Profile</span>
          </li>
        </ul>
      </div>
      <div className="bottom">theme</div>
    </div>
  );
};

export default Sidebar;
