import React, { useCallback } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import Logo from "../../assets/images/logo.JPG";
import "../../css/details-page.css";

const Details = () => {
  const email = "kalebrupe17@gmail.com";
  const subject = encodeURIComponent("Inquiry here!");
  const body = encodeURIComponent(
    "Put your inquiries or questions here. We will get back to you asap."
  );
  const mailtoHref = `mailto:${email}?subject=${subject}&body=${body}`;

  const address = "219 B St, Coos Bay, OR 97420, United States";
  const latitude = 43.36725;
  const longitude = -124.19758;

  const handleMapClick = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    let mapsUrl;

    if (
      userAgent.includes("mac os x") ||
      userAgent.includes("iphone") ||
      userAgent.includes("ipad")
    ) {
      mapsUrl = `https://maps.apple.com/?ll=${latitude},${longitude}&q=${encodeURIComponent(
        address
      )}`;
    } else if (userAgent.includes("android")) {
      mapsUrl = `geo:${latitude},${longitude}?q=${encodeURIComponent(address)}`;
    } else {
      mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    }

    window.open(mapsUrl, "_blank");
  }, [address, latitude, longitude]);

  return (
    <div className="details-container">
      <div className="center">
        <a href="/" id="bottle">
          <img src={Logo} alt="Santa Cruz Sun LLC Logo" className="photo" />
        </a>

        <h1>Santa Cruz Sun LLC</h1>
        <p>Contractors License:</p>
        <a
          href="https://search.ccb.state.or.us/search/search_result.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Click to View: CCB#249418</p>
        </a>
      </div>

      <div className="contact-links">
        <h3>Physical Address:</h3>
        <address>
          <a href="/" onClick={handleMapClick}>
            <GrLocation className="icon" />
            219 B Street
            <br />
            Coos Bay, OR 97420
          </a>
        </address>

        <h3>Email:</h3>
        <a href={mailtoHref} target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
          <span>Send Email</span>
        </a>

        <h3>Phone:</h3>
        <a href="tel:3852049488" rel="noopener noreferrer">
          <FaPhone className="icon" />
          <span>(385) 204-9488</span>
        </a>
      </div>
    </div>
  );
};

export default React.memo(Details);
