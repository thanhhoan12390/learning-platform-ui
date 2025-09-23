import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBell } from '@fortawesome/free-regular-svg-icons';

import images from '~/assets/images';
import { CartIcon } from '~/components/Icons';
import MultiSubNavigationMenu from '~/layouts/components/MultiSubNavigationMenu';
import { exploreMenuData } from '~/appData';
import FlexibleButton from '~/components/FlexibleButton';
import PopperWrapper from '~/components/PopperWrapper';
import styles from './Header.module.scss'; // luôn để import styles ở vị trí cuối cùng để ghi đè CSS của các component ở trên

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('header-logo')}>
                <img src={images.logo} alt="Logo image" width="91" height="34" loading="lazy" />
            </Link>
            <nav className={cx('nav-item', 'nav-explore')}>
                <Link className={cx('nav-link')} to="">
                    Explore
                </Link>

                <MultiSubNavigationMenu menuFieldData={exploreMenuData} className={cx('multi-nav-menu')} />
            </nav>

            <div className={cx('nav-search')}>
                <input name="header search" type="text" />
            </div>

            <div className={cx('nav-item', 'nav-business')}>
                <Link className={cx('nav-link')} to="">
                    My Business
                </Link>

                <PopperWrapper className={cx('nav-business-wrapper')}>
                    <div className={cx('nav-business-content')}>
                        <div className={cx('nav-business-text')}>
                            Get your team access to over 30,000 top Udemy courses, anytime, anywhere.
                        </div>
                        <FlexibleButton primary>Try Academy Business</FlexibleButton>
                    </div>
                </PopperWrapper>
            </div>

            <div className={cx('nav-item', 'nav-teaching')}>
                <Link className={cx('nav-link')} to="">
                    Teach on App
                </Link>

                <PopperWrapper className={cx('nav-teaching-wrapper')}>
                    <div className={cx('nav-teaching-content')}>
                        <div className={cx('nav-teaching-text')}>
                            Turn what you know into an opportunity and reach millions around the world.
                        </div>
                        <FlexibleButton primary>Learn more</FlexibleButton>
                    </div>
                </PopperWrapper>
            </div>

            <div className={cx('nav-item', 'nav-learning')}>
                <Link className={cx('nav-link')} to="">
                    My learning
                </Link>

                <PopperWrapper className={cx('nav-learning-wrapper')}>
                    <div className={cx('nav-learning-content')}>
                        <div className={cx('nav-learning-text')}>Start learning today.</div>
                        <FlexibleButton outline>Browser now</FlexibleButton>
                    </div>
                </PopperWrapper>
            </div>

            <div className={cx('nav-item', 'nav-wishlist')}>
                <Link className={cx('nav-link')} to="">
                    <FontAwesomeIcon icon={faHeart} className={cx('nav-icon')} />
                </Link>

                <PopperWrapper className={cx('nav-wishlist-wrapper')}>
                    <div className={cx('nav-wishlist-content')}>
                        <div className={cx('nav-wishlist-text')}>Your wishlist is empty.</div>
                        <FlexibleButton text>Explore courses</FlexibleButton>
                    </div>
                </PopperWrapper>
            </div>

            <div className={cx('nav-item', 'nav-cart')}>
                <Link className={cx('nav-link')} to="">
                    <CartIcon width="100%" height="2rem" className={cx('nav-icon')} />
                </Link>

                <PopperWrapper className={cx('nav-cart-wrapper')}>
                    <div className={cx('nav-cart-content')}>
                        <div className={cx('nav-cart-text')}>Your wishlist is empty.</div>
                        <FlexibleButton text>Keep shopping</FlexibleButton>
                    </div>
                </PopperWrapper>
            </div>

            <div className={cx('nav-item', 'nav-notify')}>
                <Link className={cx('nav-link')} to="">
                    <FontAwesomeIcon icon={faBell} className={cx('nav-icon')} />
                </Link>

                <PopperWrapper className={cx('nav-notify-wrapper')}>
                    <div className={cx('nav-notify-content')}>
                        <div className={cx('nav-notify-header')}>
                            <div className={cx('nav-notify-heading')}>Notifications</div>
                            <FlexibleButton text className={cx('nav-notify-setting')}>
                                Settings
                            </FlexibleButton>
                        </div>
                        <div className={cx('nav-notify-text')}>No notifications.</div>
                    </div>
                </PopperWrapper>
            </div>

            <div className={cx('nav-item')}>
                <Link className={cx('nav-link')} to="">
                    <div className={cx('avatar')}>HT</div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
