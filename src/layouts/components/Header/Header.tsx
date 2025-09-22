import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBell } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { CartIcon } from '~/components/Icons';
import MultiSubNavigationMenu from '~/layouts/components/MultiSubNavigationMenu';
import { exploreMenuData } from '~/appData';

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

            <div className={cx('nav-item')}>
                <Link className={cx('nav-link')} to="">
                    My Business
                </Link>
            </div>

            <div className={cx('nav-item')}>
                <Link className={cx('nav-link')} to="">
                    Teach on App
                </Link>
            </div>

            <div className={cx('nav-item')}>
                <Link className={cx('nav-link')} to="">
                    My learning
                </Link>
            </div>

            <div className={cx('nav-item')}>
                <Link className={cx('nav-link')} to="">
                    <FontAwesomeIcon icon={faHeart} className={cx('nav-icon')} />
                </Link>
            </div>

            <div className={cx('nav-item')}>
                <Link className={cx('nav-link')} to="">
                    <CartIcon width="100%" height="2rem" className={cx('nav-icon')} />
                </Link>
            </div>

            <div className={cx('nav-item')}>
                <Link className={cx('nav-link')} to="">
                    <FontAwesomeIcon icon={faBell} className={cx('nav-icon')} />
                </Link>
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
