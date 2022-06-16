import "./navbar.scss";
import "./navbar.scss";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PublicIcon from "@mui/icons-material/Public";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search...." />
          <ManageSearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <PublicIcon />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon />
          </div>
          <div className="item">
            <SendOutlinedIcon />
          </div>
          <div className="item">
            <CropFreeOutlinedIcon />
          </div>
          <div className="item">
            <BlurOnOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
