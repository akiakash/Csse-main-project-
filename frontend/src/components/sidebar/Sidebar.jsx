import "./sidebar.css";
import { LineStyle, PermIdentity, Storefront } from "@material-ui/icons";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <a to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </a>
            <a to="/employee" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Employee
              </li>
            </a>
            <a to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </a>
            <a to="/products" className="link">
              <li className="sidebarListItem">
                <LocalShippingIcon className="sidebarIcon" />
                Orders
              </li>
            </a>
            <a to="/supplier" className="link">
              <li className="sidebarListItem">
                <LocalShippingIcon className="sidebarIcon" />
                Supplier
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
