import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor } from "../../client";
import styles from "./Testimonial.module.scss";

const Testimonial = ({ testimonialsData, brandsData }) => {
  const [brands, setBrands] = useState(brandsData);
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const test = testimonials[currentIndex];
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      {testimonials.length && (
        <>
          <div
            className={`${styles.app__testimonial_item} ${styles.app__flex}`}
          >
            <img src={urlFor(test.imageUrl)} alt="testimonials" />
            <div className={styles.app__testimonial_content}>
              <p className="p_text">{test.feedback}</p>
              <div>
                <h4 className="bold_text">{test.name}</h4>
                <h5 className="p_text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div
            className={`${styles.app__testimonial_btns} ${styles.app__flex}`}
          >
            <div
              className={styles.app__flex}
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className={styles.app__flex}
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className={`${styles.app__testimonial_brands} ${styles.app__flex}`}>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
