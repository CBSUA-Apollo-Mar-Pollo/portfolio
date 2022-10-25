import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import circle from "../../assets/circle.svg";
import styles from "./Header.module.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className={`${styles.app__header} ${styles.app__flex}`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.app__header_info}
      >
        <div className={styles.app__header_badge}>
          <div className={`${styles.badge_cmp} ${styles.app__flex}`}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p_text">Hello, I am</p>
              <h1 className="head_text">Micael</h1>
            </div>
          </div>

          <div className={`${styles.tag_cmp} ${styles.app__flex}`}>
            <p className="p_text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.app__header_img}
      >
        <Image
          src={images.profile}
          alt="profile_bg"
          className={styles.person}
        />
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          alt="profile_circle"
          className={styles.overlay_circle}
        >
          <Image src={images.circle} alt="profile_bg" />
        </motion.div>
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.app__header_circles}
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div
            className={`${styles.circle_cmp} ${styles.app__flex}`}
            key={`circle-${index}`}
          >
            <Image src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
