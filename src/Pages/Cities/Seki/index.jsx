import React, { useEffect } from "react";
import img1 from "../../../Assets/Images/City/Seki/1.jpg";
import img2 from "../../../Assets/Images/City/Seki/2.jpg";
import img3 from "../../../Assets/Images/City/Seki/3.webp";
import img4 from "../../../Assets/Images/City/Seki/4.jpeg";
import img5 from "../../../Assets/Images/City/Seki/5.jpg";
import Footer from "../../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Seki = () => {
  const { t } = useTranslation("seki");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="seki">
      <div className="container">
        <h1>{t("seki.title")}</h1>

        <div data-aos="fade-up" className="first">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <h2>{t("seki.intro.title")}</h2>
            <p>{t("seki.intro.text")}</p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="second">
          <div>
            <h2>{t("seki.history.title")}</h2>
            <p>{t("seki.history.text")}</p>
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>

        <div data-aos="fade-up" className="third">
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <h2>{t("seki.tourism.title")}</h2>
            <p>{t("seki.tourism.text")}</p>
          </div>
        </div>

        <div data-aos="fade-up" className="fourth">
          <div>
            <h2>{t("seki.sights.title")}</h2>
            <p>{t("seki.sights.text")}</p>
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>

        <div data-aos="fade-up" className="fifth">
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <h2>{t("seki.nature.title")}</h2>
            <p>{t("seki.nature.text")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Seki;
