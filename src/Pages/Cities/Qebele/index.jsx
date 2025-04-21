import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import img1 from '../../../Assets/Images/City/Qebele/1.jpg';
import img2 from '../../../Assets/Images/City/Qebele/2.jpg';
import img3 from '../../../Assets/Images/City/Qebele/3.jpg';
import img4 from '../../../Assets/Images/City/Qebele/4.jpg';
import img5 from '../../../Assets/Images/City/Qebele/5.jpg';
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Qebele = () => {
  const { t } = useTranslation('qebele');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="qebele">
      <div className="container">
        <h1>{t("qebele.title")}</h1>

        <div data-aos="fade-up" className="first">
          <div><img src={img1} alt="Qəbələ" /></div>
          <div><h2>{t("qebele.section1.title")}</h2>
            <p>{t("qebele.section1.text")}</p></div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="second">
          <div><h2>{t("qebele.section2.title")}</h2>
            <p>{t("qebele.section2.text")}</p></div>
          <div><img src={img2} alt="Qəbələ Təbiəti" /></div>
        </div>

        <div data-aos="fade-up" className="third">
          <div><img src={img3} alt="Qəbələ Tarixi" /></div>
          <div><h2>{t("qebele.section3.title")}</h2>
            <p>{t("qebele.section3.text")}</p></div>
        </div>

        <div data-aos="fade-up" className="fourth">
          <div>
            <h2>{t("qebele.section4.title")}</h2>
            <p>{t("qebele.section4.text")}</p>
          </div>
          <div>
            <img src={img4} alt="Qəbələ İqtisadiyyatı" />
          </div>
        </div>

        <div data-aos="fade-up" className="fifth">
          <div><img src={img5} alt="Qəbələ Turizmi" /></div>
          <div><h2>{t("qebele.section5.title")}</h2>
            <p>{t("qebele.section5.text")}</p></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Qebele;
