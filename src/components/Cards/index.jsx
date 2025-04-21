import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Cards.css';
import { useTranslation } from 'react-i18next';

import img from '../../Assets/Images/City/Qax/1.jpg';
import img2 from '../../Assets/Images/City/Seki/2.jpg';
import img3 from '../../Assets/Images/City/Zaqatala/1.jpg';
import img4 from '../../Assets/Images/City/Qusar/1.jpg';
import img5 from '../../Assets/Images/City/Quba/4.jpg';
import img6 from '../../Assets/Images/City/Ismayilli/5.jpeg';
import img7 from '../../Assets/Images/City/Qebele/1.jpg';
import img8 from '../../Assets/Images/City/Lenkeran/1.jpg';
import img9 from '../../Assets/Images/City/Lerik/1.jpg';

const Cards = () => {
    const { t } = useTranslation('cards');

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const Data = [
        {
            id: 1,
            imgSrc: img,
            title: t('destinations.qax.title'),
            location: t('destinations.qax.location'),
            grade: t('destinations.qax.grade'),
            fees: '$170',
            description: t('destinations.qax.description')
        },
        {
            id: 2,
            imgSrc: img2,
            title: t('destinations.sheki.title'),
            location: t('destinations.sheki.location'),
            grade: t('destinations.sheki.grade'),
            fees: '$170',
            description: t('destinations.sheki.description')
        },
        {
            id: 3,
            imgSrc: img3,
            title: t('destinations.zaqatala.title'),
            location: t('destinations.zaqatala.location'),
            grade: t('destinations.zaqatala.grade'),
            fees: '$170',
            description: t('destinations.zaqatala.description')
        },
        {
            id: 4,
            imgSrc: img4,
            title: t('destinations.qusar.title'),
            location: t('destinations.qusar.location'),
            grade: t('destinations.qusar.grade'),
            fees: '$150',
            description: t('destinations.qusar.description')
        },
        {
            id: 5,
            imgSrc: img5,
            title: t('destinations.quba.title'),
            location: t('destinations.quba.location'),
            grade: t('destinations.quba.grade'),
            fees: '$150',
            description: t('destinations.quba.description')
        },
        {
            id: 6,
            imgSrc: img6,
            title: t('destinations.ismayilli.title'),
            location: t('destinations.ismayilli.location'),
            grade: t('destinations.ismayilli.grade'),
            fees: '$150',
            description: t('destinations.ismayilli.description')
        },
        {
            id: 7,
            imgSrc: img7,
            title: t('destinations.qebele.title'),
            location: t('destinations.qebele.location'),
            grade: t('destinations.qebele.grade'),
            fees: '$150',
            description: t('destinations.qebele.description')
        },
        {
            id: 8,
            imgSrc: img8,
            title: t('destinations.lenkeran.title'),
            location: t('destinations.lenkeran.location'),
            grade: t('destinations.lenkeran.grade'),
            fees: '$120',
            description: t('destinations.lenkeran.description')
        },
        {
            id: 9,
            imgSrc: img9,
            title: t('destinations.lerik.title'),
            location: t('destinations.lerik.location'),
            grade: t('destinations.lerik.grade'),
            fees: '$120',
            description: t('destinations.lerik.description')
        }
    ];

    return (
        <section className='cards container section'>
            <div className='cardsTitle'>
                <h3 data-aos="fade-right" className='title'>
                    {t('mostVisited')}
                </h3>
            </div>
            <div className='cardsContent grid'>
                {Data.map(({ id, imgSrc, title, location, grade, fees, description }) => (
                    <div key={id} data-aos="fade-up" className='singleDestination'>
                        <div className='imageDiv'>
                            <img src={imgSrc} alt={title} />
                        </div>

                        <div className='cardInfo'>
                            <h4 className='destTitle'>{title}</h4>
                            <span className='continent flex'>
                                <HiOutlineLocationMarker className='iconLocation' />
                                <span className='name'>{location}</span>
                            </span>

                            <div className='fees flex'>
                                <div className='grade'>
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                <div className='price'>
                                    <h5>{fees}</h5>
                                </div>
                            </div>

                            <div className='desc'>
                                <p>{description}</p>
                            </div>

                            <button className='btn flex'>
                                <Link to={`/destination/${id}`}>{t('details')}</Link>
                                <HiOutlineClipboardCheck className='iconDetails' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cards;
