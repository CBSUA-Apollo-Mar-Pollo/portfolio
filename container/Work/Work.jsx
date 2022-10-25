import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import styles from "./Work.module.scss";

const Work = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState(data);
  const [filterWork, setFilterWork] = useState(data);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head_text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className={styles.app__work_filter}>
        {["UI/UX", "Web App", "Mobile App", "React JS", "Next JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`${styles.app__work_filter_item} ${styles.app__flex} ${
                styles.p_text
              } ${activeFilter === item ? styles.item_active : " "}`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.app__work_portfolio}
      >
        {filterWork?.map((work, index) => (
          <div
            className={`${styles.app__work_item} ${styles.app__flex} `}
            key={index}
          >
            <div className={`${styles.app__work_img} ${styles.app__flex}`}>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`${styles.app__work_hover} ${styles.app__flex}`}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={styles.app__flex}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={styles.app__flex}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className={`${styles.app__work_content} ${styles.app__flex}`}>
              <h4 className="bold_text">{work.title}</h4>
              <p className="p_text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className={`${styles.app__work_tag} ${styles.app_flex}`}>
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
