import React, { useEffect } from "react";
import img1 from '../../../Assets/Images/City/Qusar/1.jpg';
import img2 from '../../../Assets/Images/City/Qusar/2.jpg';
import img3 from '../../../Assets/Images/City/Qusar/3.jpg';
import img4 from '../../../Assets/Images/City/Qusar/4.jpg';
import img5 from '../../../Assets/Images/City/Qusar/5.jpg';
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const Qusar = () => {
  
  const { t } = useTranslation('qusar');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="qusar">
      <div className="container">
        <h1>{t("qusar.title")}</h1>

        <div data-aos="fade-up" className="first">
          <div><img src={img1} alt="" /></div>
          <div>
            <p>
              <b>{t("qusar.section1.title")}</b><br />
              {t("qusar.section1.text")}
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="second">
          <div>
            <p>
              <b>{t("qusar.section2.title")}</b><br />
              {t("qusar.section2.text")}
            </p>
          </div>
          <div><img src={img2} alt="" /></div>
        </div>

        <div data-aos="fade-up" className="third">
          <div><img src={img3} alt="" /></div>
          <div>
            <p>
              <b>{t("qusar.section3.title")}</b><br />
              {t("qusar.section3.text")}
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="fourth">
          <div>
            <p>
              <b>{t("qusar.section4.title")}</b><br />
              {t("qusar.section4.text")}
            </p>
          </div>
          <div><img src={img4} alt="" /></div>
        </div>

        <div data-aos="fade-up" className="fifth">
          <div><img src={img5} alt="" /></div>
          <div>
            <p>
              <b>{t("qusar.section5.title")}</b><br />
              {t("qusar.section5.text")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Qusar;
