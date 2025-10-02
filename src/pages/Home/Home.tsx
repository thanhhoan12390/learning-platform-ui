import classNames from 'classnames/bind';
import { useCallback } from 'react';

import Divider from '~/components/Divider';
import NavBar from '~/components/NavBar';
import ImageSlider from '~/components/ImageSlider';
import FlexibleButton from '~/components/FlexibleButton/FlexibleButton';
import images from '~/assets/images';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const bannerFloatContent = useCallback(
        (title: string, content: React.ReactNode) => (
            <div className={cx('banner-float-content')}>
                <h1 className={cx('banner-heading')}>{title}</h1>
                {content}
            </div>
        ),
        [],
    );

    return (
        <div className={cx('wrapper')}>
            <Divider />
            <NavBar />

            <div className={cx('home-container')}>
                <div className={cx('home-content')}>
                    <div className={cx('banner-container')}>
                        <div className={cx('welcome-area')}>
                            <div style={{ width: '6.4rem', height: '6.4rem' }} className={cx('default-avatar')}>
                                HT
                            </div>
                            <div className={cx('user-detail')}>
                                <h3 className={cx('welcome-heading')}>Welcome back</h3>
                                <div className={cx('welcome-btn')}>
                                    <FlexibleButton small hover underlined>
                                        Add occupation and interests
                                    </FlexibleButton>
                                </div>
                            </div>
                        </div>
                        <ImageSlider
                            carouselData={[
                                {
                                    img: images.homeSliderImg0,
                                    floatContent: bannerFloatContent(
                                        '24-Hour Flash Sale',
                                        <p>
                                            Learn valuable, practical skills for as low as ₫279,000. Sale ends tonight!
                                        </p>,
                                    ),
                                },

                                {
                                    img: images.homeSliderImg1,
                                    floatContent: bannerFloatContent(
                                        'Prep for your IT certificate',
                                        <p>
                                            <a target="_blank" href="">
                                                Explore a future in IT
                                            </a>
                                            . Start learning toward AWS certification, CompTIA A+ certification, and
                                            more.
                                        </p>,
                                    ),
                                },

                                {
                                    img: images.homeSliderImg2,
                                    floatContent: bannerFloatContent(
                                        'Learn from anywhere',
                                        <p>
                                            On the couch, from the backyard, or on your commute.{' '}
                                            <a target="_blank" href="">
                                                Our app
                                            </a>{' '}
                                            lets you decide.
                                        </p>,
                                    ),
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
