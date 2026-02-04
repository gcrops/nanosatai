import './addres-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export function AddressBar() {
  return (
    <div className="address">
      <div className="address-left">
        <div>
          <a
            href="https://www.google.com/maps/search/House+No+1-113-10%2F1,Plot+46%2F8,+MVP+colony,Visakhapatnam+-+530017/@17.7477437,83.3166683,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              size="xl"
              className="address-icon"
            />
            House No 1-113-10/1,Plot 46/8, MVP colony,Visakhapatnam - 530017
          </a>
        </div>

        <div>
          <a href="mailto:farm3eye@nanosat.ai">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className="address-icon"
            />
            farm3eye@nanosat.ai
          </a>
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faFacebookF}
          size="xl"
          className="address-icon"
        />
        <FontAwesomeIcon icon={faTwitter} size="xl" className="address-icon" />
        <FontAwesomeIcon
          icon={faLinkedinIn}
          size="xl"
          className="address-icon"
        />
      </div>
    </div>
  );
}
