import React, { useEffect } from "react";
import img1 from '../../../Assets/Images/City/Lerik/1.jpg';
import img2 from '../../../Assets/Images/City/Lerik/2.jpg';
import img3 from '../../../Assets/Images/City/Lerik/3.jpg';
import img4 from '../../../Assets/Images/City/Lerik/4.jpg';
import img5 from '../../../Assets/Images/City/Lerik/5.jpg';
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const Lerik = () => {

  const { t } = useTranslation('lerik');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="lerik">
      <div className="container">
        <h1>{t("lerik_title")}</h1>

        <div data-aos="fade-up" className="first">
          <div><img src={img1} alt="" /></div>
          <div><p><b>{t("section_1.title")}</b><br />{t("section_1.text")}</p></div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="second">
          <div><p><b>{t("section_2.title")}</b><br />{t("section_2.text")}</p></div>
          <div><img src={img2} alt="" /></div>
        </div>

        <div data-aos="fade-up" className="third">
          <div><img src={img3} alt="" /></div>
          <div><p><b>{t("section_3.title")}</b><br />{t("section_3.text")}</p></div>
        </div>

        <div data-aos="fade-up" className="fourth">
          <p><b>{t("section_4.title")}</b><br />{t("section_4.text")}</p>
          <div><div><img src={img4} alt="" /></div></div>
        </div>

        <div data-aos="fade-up" className="fifth">
          <div><img src={img5} alt="" /></div>
          <div><p><b>{t("section_5.title")}</b><br />{t("section_5.text")}</p></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Lerik;
