import { useState } from 'react';
import './ContactUs.css';
export function ContactUs() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleGmailOpen = () => {
    const subject = `Contact from ${name}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=farm3eye@nanosat.ai&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(gmailUrl);
  };

  return (
    <div>
      <div className="MainHeroContactus">
        <div className="heroTextContactus">Contact Us</div>
      </div>
      <div className="contactsplit">
        <div className="getintouch">
          <h1>Get In Touch</h1>

          <h3>
            Any question? Reach out to us and we’ll get back to you shortly.
          </h3>
          <div className="container">
            <form action="">
              <label>Your Name*</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <label>Your Message</label>
              <textarea
                id="subject"
                name="subject"
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
              <button className="email-button" onClick={handleGmailOpen}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="officeaddress">
          <h1>Head Office</h1>
          <div>NANOSAT.AI PRIVATE LIMITED</div>
          <div className="customblue">
            <div>House No 1-113-10/1</div>
            <div>Plot 46/8, MVP colony.</div>
            <div>Visakhapatnam</div>
            ANDHRA PRADESH 
            <br />
            530017
            <br />
            TEL. NO.:8978358657
            <br />
            Email: farm3eye@nanosat.ai
          </div>
        </div><div className="officeaddress">
          <h1>Corporate Office</h1>
          <div>NANOSAT.AI PRIVATE LIMITED</div>
          <div className="customblue">
            HIG 72, AP House Boarding  colony
            <br />
            Guntur 522004
            <br />
            Email: farm3eye@nanosat.ai
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
