import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
        <div className="featuredChart"></div>
      </div>
    </div>
  );
};

export default Featured;
