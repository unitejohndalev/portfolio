import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { send } from "emailjs-com";
import Swal from "sweetalert2";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
 
    send("service_7tad1wd", "template_tra5xee", toSend, "ksGqj2tX1kEJRq6AZ")
      .then((response) => {
     
        Swal.fire(
          {
            position: "center",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 5000,

          },
          response.status,
          response.text
        );
      })
      .catch((err) => {
        alert("Message failed!...", err);
      });
   setToSend({
     from_name: "",
     message: "",
     reply_to: "",
   });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="info-section-container">
          <section className="phone-section">
            <div className="round-icon-container">
              <FaPhone className="faIcons" />
            </div>
            <p>+63 921XXXXXXX</p>
          </section>
          <section className="message-section">
            <div className="round-icon-container">
              <FaEnvelope className="faIcons" />
            </div>
            <p>unitejohndalev@gmail.com</p>
          </section>
          <section className="location-section">
            <div className="round-icon-container">
              <FaMapMarkerAlt className="faIcons" />
            </div>
            <p>Quezon City, Manila Philippines</p>
          </section>
        </div>
        <h2>Contact Me</h2>
        <div className="line"></div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={toSend.from_name}
            onChange={handleChange}
            className="form-field"
          />

          <input
            type="text"
            name="reply_to"
            placeholder="Your Email"
            value={toSend.reply_to}
            onChange={handleChange}
            className="form-field"
          />

          <textarea
            type="text"
            name="message"
            placeholder="Your Message"
            value={toSend.message}
            onChange={handleChange}
            className="form-field"
          />

          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
