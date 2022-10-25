import React, { useState } from "react";
import Image from "next/image";
import { HiMenuAlt4 , HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import styles from "./Navbar.module.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbar_logo}>
        <Image src={images.logo} alt="logo" />
      </div>
      <ul className={styles.app__navbar_links}>
        {["home", "about","work", "skills","contact"].map((item) => (
          <li key={`link-${item}`} className="app__flex p_text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className={styles.app__navbar_menu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >

            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about","work", "skills","contact"].map((item) => (
                <li key={item} >
                  <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
