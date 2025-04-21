import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../../Assets/Images/City/Qax/1.jpg";
import img2 from "../../../Assets/Images/City/Qax/2.jpg";
import img3 from "../../../Assets/Images/City/Qax/3.jpg";
import img4 from "../../../Assets/Images/City/Qax/4.jpg";
import img5 from "../../../Assets/Images/City/Qax/5.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../../components/Footer";

const Qax = () => {
  const { t } = useTranslation('qax');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="qax">
      <div className="container">
        <h1>{t("qax.title")}</h1>

        <div className="first" data-aos="fade-up">
          <div><img src={img1} alt="img1" /></div>
          <div>
            <h2>{t("qax.section1.title")}</h2>
            <p>{t("qax.section1.text")}</p>
          </div>
        </div>

        <div className="second" data-aos="fade-up">
          <div>
            <h2>{t("qax.section2.title")}</h2>
            <p>{t("qax.section2.text")}</p>
          </div>
          <div><img src={img2} alt="img2" /></div>
        </div>

        <div className="third" data-aos="fade-up">
          <div><img src={img3} alt="img3" /></div>
          <div>
            <h2>{t("qax.section3.title")}</h2>
            <p>{t("qax.section3.text")}</p>
          </div>
        </div>

        <div className="fourth" data-aos="fade-up">
          <div>
            <h2>{t("qax.section4.title")}</h2>
            <p>{t("qax.section4.text")}</p>
          </div>
          <div><img src={img4} alt="img4" /></div>
        </div>

        <div className="fifth" data-aos="fade-up">
          <div><img src={img5} alt="img5" /></div>
          <div>
            <h2>{t("qax.section5.title")}</h2>
            <p>{t("qax.section5.text")}</p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Qax;
