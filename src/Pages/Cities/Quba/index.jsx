import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import img1 from '../../../Assets/Images/City/Quba/1.jpg';
import img2 from '../../../Assets/Images/City/Quba/2.jpg';
import img3 from '../../../Assets/Images/City/Quba/3.jpg';
import img4 from '../../../Assets/Images/City/Quba/4.jpg';
import img5 from '../../../Assets/Images/City/Quba/5.jpg';
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Quba = () => {
  const { t } = useTranslation('quba');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="quba">
      <div className="container">
        <h1>{t("quba.title")}</h1>

        <div data-aos="fade-up" className="first">
          <div><img src={img1} alt="Quba Image 1" /></div>
          <div>
            <h2>{t("quba.section1.title")}</h2>
            <p>{t("quba.section1.text")}</p>
          </div>
        </div>

        <div data-aos="fade-up" className="second">
          <div>
            <h2>{t("quba.section2.title")}</h2>
            <p>{t("quba.section2.text")}</p>
          </div>
          <div><img src={img2} alt="Quba Image 2" /></div>
        </div>

        <div data-aos="fade-up" className="third">
          <div><img src={img3} alt="Quba Image 3" /></div>
          <div>
            <h2>{t("quba.section3.title")}</h2>
            <p>{t("quba.section3.text")}</p>
          </div>
        </div>

        <div data-aos="fade-up" className="fourth">
          <div>
            <h2>{t("quba.section4.title")}</h2>
            <p>{t("quba.section4.text")}</p>
          </div>
          <div><img src={img4} alt="Quba Image 4" /></div>
        </div>

        <div data-aos="fade-up" className="fifth">
          <div><img src={img5} alt="Quba Image 5" /></div>
          <div>
            <h2>{t("quba.section5.title")}</h2>
            <p>{t("quba.section5.text")}</p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Quba;