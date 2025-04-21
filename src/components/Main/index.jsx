import React, { useEffect, useState } from 'react';
import { GrLocation } from "react-icons/gr";
import { HiSearch } from 'react-icons/hi';
import { IoLogoFacebook } from "react-icons/io5";
import { AiOutlineInstagram } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import './Main.css';

const Main = () => {
  const { t } = useTranslation('main');
  const navigate = useNavigate();
  const [cityId, setCityId] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const cities = [
    { id: 1, name: 'Qax' },
    { id: 2, name: 'Seki' },
    { id: 3, name: 'Zaqatala' },
    { id: 4, name: 'Qusar' },
    { id: 5, name: 'Quba' },
    { id: 6, name: 'Ismayilli' },
    { id: 7, name: 'Qebele' },
    { id: 8, name: 'Lenkeran' },
    { id: 9, name: 'Lerik' }
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleSearch = () => {
    if (cityId) {
      navigate(`/destination/${cityId}`, {
        state: {
          checkInDate,
          checkOutDate
        }
      });
    } else {
      alert(t('selectDestinationAlert'));
    }
  };

  return (
    <section className='main'>
      <div className='overlay'></div>
      <video muted autoPlay loop src="https://videos.pexels.com/video-files/5948574/5948574-uhd_2560_1440_30fps.mp4"></video>
      <div className='mainContent container'>
        <div className='textDiv'>
          <span className='smallText'>{t('ourPackages')}</span>
          <h1 data-aos="fade-up" className='mainTitle'>{t('searchHoliday')}</h1>
        </div>

        <div data-aos="fade-up" className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor="city">{t('searchDestination')}</label>
            <div className='input flex'>
              <select value={cityId} onChange={(e) => setCityId(e.target.value)}>
                <option value="">{t('selectCity')}</option>
                {cities.map(city => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </select>
              <GrLocation className='icon' />
            </div>
          </div>

          <div className='destinationInput'>
            <label htmlFor="checkIn">{t('checkIn')}</label>
            <div className='input flex'>
              <input
                type="date"
                id="checkIn"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>
          </div>

          <div className='destinationInput'>
            <label htmlFor="checkOut">{t('checkOut')}</label>
            <div className='input flex'>
              <input
                type="date"
                id="checkOut"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={checkInDate}
              />
            </div>
          </div>

          <div className='searchOptions flex' onClick={handleSearch}>
            <HiSearch className='icon' />
            <span>{t('searchBtn')}</span>
          </div>
        </div>

        <div data-aos="fade-up" className='mainFooterIcons flex'>
          <div className='rightIcons'>
            <Link to="https://www.facebook.com" target='_blank' rel="noopener noreferrer">
              <IoLogoFacebook className='icon' />
            </Link>
          </div>
          <div className='leftIcons'>
            <Link to="https://www.instagram.com" target='_blank' rel="noopener noreferrer">
              <AiOutlineInstagram className='icon' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
