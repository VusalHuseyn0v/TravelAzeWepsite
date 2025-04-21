import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import img1 from '../../../Assets/Images/City/Ismayilli/1.jpg';
import img2 from '../../../Assets/Images/City/Ismayilli/2.jpg';
import img3 from '../../../Assets/Images/City/Ismayilli/3.jpg';
import img4 from '../../../Assets/Images/City/Ismayilli/4.jpg';
import img5 from '../../../Assets/Images/City/Ismayilli/5.jpeg';
import Footer from '../../../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Ismayilli = () => {
  const { t } = useTranslation('ismayilli');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="ismayilli">
      <div className="container">
        <h1>{t("ismayilli_title")}</h1>

        <div data-aos="fade-up" className="first">
          <div><img src={img1} alt="Ismayilli" /></div>
          <div>
            <p>
              <b>{t("section_1.title")}</b><br />
              {t("section_1.text")}
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="second">
          <div>
            <p>
              <b>{t("section_2.title")}</b><br />
              {t("section_2.text")}
            </p>
          </div>
          <div>
            <img src={img2} alt="Culture" />
          </div>
        </div>

        <div data-aos="fade-up" className="third">
          <div><img src={img3} alt="Attractions" /></div>
          <div>
            <p>
              <b>{t("section_3.title")}</b><br />
              {t("section_3.text")}
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="fourth">
          <p>
            <b>{t("section_4.title")}</b><br />
            {t("section_4.text")}
          </p>
          <div><img src={img4} alt="Economy" /></div>
        </div>

        <div data-aos="fade-up" className="fifth">
          <div><img src={img5} alt="Travel" /></div>
          <div>
            <p>
              <b>{t("section_5.title")}</b><br />
              {t("section_5.text")}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Ismayilli;
