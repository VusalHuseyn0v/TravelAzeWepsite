import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import img1 from '../../../Assets/Images/City/Zaqatala/1.jpg';
import img2 from '../../../Assets/Images/City/Zaqatala/2.jpg';
import img3 from '../../../Assets/Images/City/Zaqatala/3.jpg';
import img4 from '../../../Assets/Images/City/Zaqatala/4.jpg';
import img5 from '../../../Assets/Images/City/Zaqatala/5.jpg';
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Zaqatala = () => {
  const { t } = useTranslation('zaqatala');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="zaqatala">
      <div className="container">
        <h1>{t("zaqatala.title")}</h1>

        <div data-aos="fade-up" className="first">
          <div><img src={img1} alt="zaqatala" /></div>
          <div>
            <h2>{t("zaqatala.section1.title")}</h2>
            <p>{t("zaqatala.section1.text")}</p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="second">
          <div>
            <h2>{t("zaqatala.section2.title")}</h2>
            <p>{t("zaqatala.section2.text")}</p>
          </div>
          <div>
            <img src={img2} alt="zaqatala" />
          </div>
        </div>

        <div data-aos="fade-up" className="third">
          <div><img src={img3} alt="zaqatala" /></div>
          <div>
            <h2>{t("zaqatala.section3.title")}</h2>
            <p>{t("zaqatala.section3.text")}</p>
          </div>
        </div>

        <div data-aos="fade-up" className="fourth">
          <div>
            <h2>{t("zaqatala.section4.title")}</h2>
            <p>{t("zaqatala.section4.text")}</p>
          </div>
          <div><img src={img4} alt="zaqatala" /></div>
        </div>

        <div data-aos="fade-up" className="fifth">
          <div><img src={img5} alt="zaqatala" /></div>
          <div>
            <h2>{t("zaqatala.section5.title")}</h2>
            <p>{t("zaqatala.section5.text")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Zaqatala;
