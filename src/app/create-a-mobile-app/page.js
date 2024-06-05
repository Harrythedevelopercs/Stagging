"use client"
import React, { useEffect, useState } from "react";
// CSS 
import styles from "@/styles/bannerlp6.module.css";
import stylesjust from "@/styles/Justbuilditlp.module.css";
// Components
import Bannerlp6 from "../../components/Bannerlp6";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpForm6 from "../../components/LpForm6";
import Nothing from "../../components/Nothing";
import NewMaintain6Lp from "../../components/NewMaintain6Lp";
import WeworkLp from "../../components/new-home-page-fy/WeworkLphome";
import StartupsLp from "../../components/StartupsLp6";
import ProjectProcess from "../../components/ProjectProcessLp6";
import LpChoose from "../../components/LpChoose";
import Technologieslp from "../../components/Technologieslp";
import Justbuilditlp from "../../components/Justbuilditlp";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import Formnewlp from "../../components/Formnewlp";
import NewFaqslp from "../../components/NewFaqslp";
import HomeLocationlp from "../../components/HomeLocationlp";

export default function gamedevelopmentcompany() {
 
  return (
    <>
      <Bannerlp6
        title={
          <>
            <h1 className={`${styles.develop} text-center font50 font-bold mb-3`}>
              Create a Mobile App That Stands Out
            </h1>
          </>
        }
        para={
          <>
            <p className="font20 white center mb-3">
              Beautiful, High-Performance Apps Delivered <span className={styles.txtDec}>ON TIME</span> and <span className={styles.txtDec}>WITHIN BUDGET</span>
            </p>
          </>
        }
        newHomeBgprops="newHomeBg"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      
    </>
  );
}
