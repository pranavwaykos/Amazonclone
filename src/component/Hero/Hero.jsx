import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowUpCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.hside}>
        <span className={css.text1}>skin protection</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {""}
            Trendy Collection Trendy Collection Trendy CollectionTrendy Collection Trendy Collection Trendy</span>
        </div>
      </div>

      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.sigup}>
            <span>Best Signup offers</span>
            <div>
              <BsArrowUpCircle />
            </div>
          </div>
        </div>
      </div>

      <div className={css.hside}>
        <div className={css.traffic}>
            <span>1.5</span>
            <span>Monthly Traffic</span>
        </div>
        <div className={css.customer}>
            <span>100k</span>
            <span>Happy Customer</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
