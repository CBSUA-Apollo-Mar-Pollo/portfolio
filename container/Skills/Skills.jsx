import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactToolTip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import styles from "./Skills.module.scss";

const Skills = ({ skillsData, experiencesData }) => {
  const [experience, setExperience] = useState(experiencesData);
  const [skills, setSkills] = useState(skillsData);
  return (
    <>
      <h2 className="head_text">Skills & Experience</h2>

      <div className={styles.app__skills_container}>
        <motion.div className={styles.app__skills_list}>
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`${styles.app__skills_item} ${styles.app__flex}`}
              key={skill.name}
            >
              <div
                className={styles.app__flex}
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p_text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={styles.app__skills_exp}>
          {experience?.map((experience) => (
            <motion.div
              className={styles.app__skills_exp_item}
              key={experience.year}
            >
              <div className={styles.app__skills_exp_year}>
                <p className="bold_text">{experience.year}</p>
              </div>
              <motion.div className={styles.app__skills_exp_works}>
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className={styles.app__skills_exp_work}
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold_text">{work.name}</h4>
                      <p className="p_text">{work.company}</p>
                    </motion.div>
                    <ReactToolTip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      class={styles.skills_tooltip}
                    >
                      {work.desc}
                    </ReactToolTip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
