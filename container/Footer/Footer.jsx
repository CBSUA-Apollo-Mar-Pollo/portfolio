import React, { useState } from "react";
import Image from "next/image";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import styles from "./Footer.module.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head_text">Take a coffee & chat With me</h2>

      <div className={styles.app__footer_cards}>
        <div className={styles.app__footer_card}>
          <div className={styles.app__footer_card_img}>
            <Image src={images.email} alt="email" width={40} height={40} />
          </div>
          <a href="mailto:apollomar22@gmail.com" className="p_text">
            Hello@apollomar22@gmail
          </a>
        </div>
        <div className={styles.app__footer_card}>
          <div className={styles.app__footer_card_img}>
            <Image src={images.mobile} alt="mobile" width={40} height={40} />
          </div>
          <a href="tel: +63(123) 456-789" className="p_text">
            +63(123) 456-789
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className={`${styles.app__footer_form} ${styles.app__flex}`}>
          <div className={styles.app__flex}>
            <input
              className="p_text"
              type="text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className={styles.app__flex}>
            <input
              className="p_text"
              type="text"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p_text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p_text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head_text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
