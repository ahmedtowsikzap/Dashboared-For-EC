import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top"><span className="logo">React Admin</span></div>
            <hr />
            <div className="center">
                <ul>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                </ul>
            </div>
            <div className="bottom">theme</div>
        </div>
    );
};

export default Sidebar;