import { AddressBar } from '@/components/address-bar/address-bar';
import { Link } from 'react-router-dom';
import './nav-bar.css';
export function Navbar() {
  return (
    <div className="sticky">
      <div>
        <AddressBar />
      </div>
      <div className="NavFlex">
        <img src="/cropxnav.png" alt="logo" className="cropxLogo" />
        <div className="ham">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="RightFlex">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <div className="dropdown">
              <div className="dropbtn">
                Services
                <i className="fa fa-caret-down"></i>
              </div>
              <div className="dropdown-content">
                <Link to="/services/devops">Devops</Link>
                <Link to="/services/cloud">Cloud Migration</Link>
                <div className="dropdown">
                  <div className="dropbtn sub">
                    Geo Spatial Analytics & Consulting
                    <i className="fa fa-caret-right"></i>
                  </div>
                  <div className="dropdown-content sub">
                    <Link to="/services/geo/data-processing">Geospatial Data Processing</Link>
                    <Link to="/services/geo/remote-sensing">Remote Sensing</Link>
                    <Link to="/services/geo/gis">GIS Consulting</Link>
                  </div>
                </div>
                <Link to="/services/security">Cloud Security</Link>
                <Link to="/services/managed-services">Managed Services</Link>
                <Link to="/services/teams">Extended Teams</Link>
              </div>
            </div>
          </div>
          <div>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <Link to="/careers">Careers</Link>
          </div>
          <div>
            <Link to="/blog">Blog</Link>
          </div>
          <div>
            <Link to="/clients">Clients</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
