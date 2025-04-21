import React, { useEffect } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation('footer');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video muted loop autoPlay src="https://videos.pexels.com/video-files/19216559/19216559-uhd_2560_1440_30fps.mp4"></video>
      </div>

      <div className='secContent container'>
        <div className="footerCard flex">
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <Link to="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />TravelAZE
              </Link>
            </div>

            <div data-aos="fade-up" className='footerParagraph'>
              {t('paragraph')}
            </div>

            <div data-aos="fade-up" className='footerSocials flex'>
              <Link to="https://www.facebook.com" target='_blank' rel="noopener noreferrer"><IoLogoFacebook className='icon' /></Link>
              <Link to="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><AiOutlineInstagram className='icon' /></Link>
            </div>
          </div>

          <div className='footerLinks grid'>
            {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>{t('agencyTitle')}</span>

              <li className='footerList flex'><FiChevronRight className='icon' />{t('services')}</li>
              <li className='footerList flex'><FiChevronRight className='icon' />{t('insurance')}</li>
              <li className='footerList flex'><FiChevronRight className='icon' />{t('agency')}</li>
              <li className='footerList flex'><FiChevronRight className='icon' />{t('tourism')}</li>
              <li className='footerList flex'><FiChevronRight className='icon' />{t('payment')}</li>
            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>{t('partnersTitle')}</span>

              <li className='footerList flex'><FiChevronRight className='icon' />{t('bookings')}</li>
              <li className='footerList flex'><FiChevronRight className='icon' />{t('rentcars')}</li>
              <li className='footerList flex'><FiChevronRight className='icon' />{t('hotels')}</li>
              <li className='footerList flex'><FiChevronRight className='icon' />{t('trivago')}</li>
              <li className='footerList flex'><FiChevronRight className='icon' />{t('tripAdvisor')}</li>
            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>{t('popularPlacesTitle')}</span>

              <li className='footerList flex'><FiChevronRight className='icon' /><Link to="/destination/1">{t('qax')}</Link></li>
              <li className='footerList flex'><FiChevronRight className='icon' /><Link to="/destination/2">{t("seki")}</Link></li>
              <li className='footerList flex'><FiChevronRight className='icon' /><Link to="/destination/3">{t("zaqatala")}</Link></li>
              <li className='footerList flex'><FiChevronRight className='icon' /><Link to="/destination/5">{t("quba")}</Link></li>
              <li className='footerList flex'><FiChevronRight className='icon' /><Link to="/destination/7">{t("qebele")}</Link></li>
            </div>
          </div>

          <div className='footerDiv flex'>
            <small>{t('bestTravel')}</small>
            <small>{t('copyright')}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
