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
        <span className="logo">Administrant</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardSharpIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <GroupOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsOutlinedIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <AssignmentTurnedInOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">NEEDED</p>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notification</span>
          </li>
          <li>
            <InsertChartOutlinedTwoToneIcon className="icon" />
            <span>Stats</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <MonitorHeartOutlinedIcon className="icon" />
            <span>Health</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          <p className="title">USER</p>
          <li>
            <InsertEmoticonIcon className="icon" />
            <span>Profile</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
