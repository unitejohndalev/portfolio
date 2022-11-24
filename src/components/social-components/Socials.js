import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaGithub,
  FaShareAlt,
} from "react-icons/fa";

function Socials() {
  const [show, setShow] = useState();
  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 650;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  
  return (
    <>
      {isVisible && (
        <div className="wrapper">
          {show && (
            <div className="icon-container icons">
              <a href="https://www.facebook.com/jd.unite/" target="_blank">
                <FaFacebookF className="facebook icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/john-dale-unite-a7aa88200/"
                target="_blank"
              >
                <FaLinkedinIn className="linkedin icon" />
              </a>
              <a href="https://github.com/unitejohndalev" target="_blank">
                <FaGithub className="github icon" />
              </a>
              <a href="https://www.tiktok.com/@dalejv" target="_blank">
                <FaTiktok className="tiktok icon" />
              </a>
            </div>
          )}
          <div className="shareSocials-container">
            <FaShareAlt className="shareSocials icon" onClick={toggleShow} />
          </div>
        </div>
      )}
    </>
  );
}

export default Socials;
