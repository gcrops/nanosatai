import cropxLogo from '../assets/cropxnav.png';
import './nav-bar.css';
import { AddressBar } from './address-bar.tsx';
export function Navbar() {
  return (
    <div>
      <div>
        <AddressBar />
      </div>
      <div className="NavFlex">
        <img src={cropxLogo} alt="logo" className="cropxLogo" />
        <div className="ham">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="RightFlex">
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Products</div>
          <div>Carrers</div>
          <div>Blog</div>
          <div>Clients</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}
