import "./sidebar.scss";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

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
            <AssignmentTurnedInOutlinedIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon />
            <span>Notification</span>
          </li>
          <li>
            <InsertChartOutlinedTwoToneIcon />
            <span>Stats</span>
          </li>
          <li>
            <MonitorHeartOutlinedIcon />
            <span>Health</span>
          </li>
          <li>
            <SettingsOutlinedIcon />
            <span>Settings</span>
          </li>
          <li>
            <PsychologyOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <ExitToAppIcon />
            <span>Logout</span>
          </li>
          <li>
            <InsertEmoticonIcon />
            <span>Profile</span>
          </li>
        </ul>
      </div>
      <div className="bottom">theme</div>
    </div>
  );
};

export default Sidebar;
