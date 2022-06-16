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
            <PublicIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <SendOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <CropFreeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <BlurOnOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="men"
              className="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
