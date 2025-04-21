import React, { useEffect } from 'react';
import img1 from '../../../Assets/Images/City/Lenkeran/1.jpg';
import img2 from '../../../Assets/Images/City/Lenkeran/2.jpg';
import img3 from '../../../Assets/Images/City/Lenkeran/3.JPG';
import img4 from '../../../Assets/Images/City/Lenkeran/4.jpg';
import img5 from '../../../Assets/Images/City/Lenkeran/5.JPG';
import Footer from '../../../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Lenkeran = () => {
  const { t } = useTranslation('lenkeran');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="lenkeran">
      <div className="container">
        <h1>{t('lenkeran_title')}</h1>

        <div data-aos="fade-up" className="first">
          <div><img src={img1} alt="Lenkeran" /></div>
          <div>
            <h2>{t('section_1.title')}</h2>
            <p>{t('section_1.text')}</p>
          </div>
        </div>

        <div data-aos="fade-up" className="second">
          <div>
            <h2>{t('section_2.title')}</h2>
            <p>{t('section_2.text')}</p>
          </div>
          <div><img src={img2} alt="Lenkeran" /></div>
        </div>

        <div data-aos="fade-up" className="third">
          <div><img src={img3} alt="Lenkeran" /></div>
          <div>
            <h2>{t('section_3.title')}</h2>
            <p>{t('section_3.text')}</p>
          </div>
        </div>

        <div data-aos="fade-up" className="fourth">
          <div>
            <h2 >{t('section_4.title')}</h2>
            <p>{t('section_4.text')}</p>

          </div>
          <div>
            <img src={img4} alt="Lenkeran" />
          </div>
        </div>

        <div data-aos="fade-up" className="fifth">
          <div><img src={img5} alt="Lenkeran" /></div>
          <div>
            <h2>{t('section_5.title')}</h2>
            <p>{t('section_5.text')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Lenkeran;
