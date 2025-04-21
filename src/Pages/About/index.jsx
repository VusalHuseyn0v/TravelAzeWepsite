import React from 'react';
import imgAbout from '../../Assets/Images/img2.JPG';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <section className='about'>
            <div className='container flex'>
                <div className='aboutImgDiv'>
                    <img src={imgAbout} alt="aboutImg" />
                </div>

                <div className='aboutWords'>
                    <h2>{t('title')}</h2>
                    <div>
                        <p>{t('intro1')}</p><br />
                        <p>{t('intro2')}</p>
                    </div>
                    <div>
                        <br />
                        <h2>{t('skillsTitle')}</h2>

                        <p>{t('html')}</p>
                        <p>{t('js')}</p>
                        <p>{t('cssLibs')}</p>
                        <p>{t('git')}</p>
                        <br />

                        <p>{t('outro')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
