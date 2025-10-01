import classNames from 'classnames/bind';
import { useCallback } from 'react';

import Divider from '~/components/Divider';
import NavBar from '~/components/NavBar';
import ImageSlider from '~/components/ImageSlider';
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
            <ImageSlider
                carouselData={[
                    {
                        img: images.homeSliderImg0,
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

                    {
                        img: images.homeSliderImg1,
                        floatContent: bannerFloatContent(
                            'Prep for your IT certificate',
                            <p>
                                <a target="_blank" href="">
                                    Explore a future in IT
                                </a>
                                . Start learning toward AWS certification, CompTIA A+ certification, and more.
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
    );
}

export default Home;
