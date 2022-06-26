import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Margot Robbie</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">margotgetrobbie@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">phone:</span>
                  <span className="itemValue">+1 2415 35 33</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">St junior. 24 Street NY</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
              details
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Transection" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions </h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
