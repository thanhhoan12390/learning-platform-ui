import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer-wrapper')}>
            <div className={cx('footer-banner')}>
                <div className={cx('teach-text')}>Teach the world online</div>
                <div className={cx('create-text')}>
                    Create an online video course, reach students across the globe, and earn money
                </div>
            </div>

            <div className={cx('companies-group')}>
                <div className={cx('companies-text')}>
                    Top companies choose Our Business to build in-demand career skills.
                </div>
                <div className={cx('partner-logos')}>
                    <img src={images.nasdaqLogo} alt="Nasdaq" height="44" width="115" loading="lazy" />
                    <img src={images.volkswagenLogo} alt="Volkswagen" height="44" width="44" loading="lazy" />
                    <img src={images.netappLogo} alt="NetApp" height="44" width="115" loading="lazy" />
                    <img src={images.eventbriteLogo} alt="Eventbrite" height="44" width="115" loading="lazy" />
                </div>
            </div>

            <div className={cx('structured-links')}>
                <div className={cx('links-item')}>
                    <div className={cx('link-heading')}>About</div>
                    <ul className={cx('link-list')}>
                        <li>
                            <Link to="">About us</Link>
                        </li>
                        <li>
                            <Link to="">Careers</Link>
                        </li>
                        <li>
                            <Link to="">Contact us</Link>
                        </li>
                        <li>
                            <Link to="">Blog</Link>
                        </li>
                        <li>
                            <Link to="">Investors</Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('links-item')}>
                    <div className={cx('link-heading')}>Discover</div>
                    <ul className={cx('link-list')}>
                        <li>
                            <Link to="">Get the app</Link>
                        </li>
                        <li>
                            <Link to="">Teaching</Link>
                        </li>
                        <li>
                            <Link to="">Plans and Pricing</Link>
                        </li>
                        <li>
                            <Link to="">Affiliate</Link>
                        </li>
                        <li>
                            <Link to="">Help and Support</Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('links-item')}>
                    <div className={cx('link-heading')}>Business</div>
                    <ul className={cx('link-list')}>
                        <li>
                            <Link to="">Our Business</Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('links-item')}>
                    <div className={cx('link-heading')}>Legal & Accessibility</div>
                    <ul className={cx('link-list')}>
                        <li>
                            <Link to="">Accessibility statement</Link>
                        </li>
                        <li>
                            <Link to="">Privacy policy</Link>
                        </li>
                        <li>
                            <Link to="">Sitemap</Link>
                        </li>
                        <li>
                            <Link to="">Terms</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('bottom-container')}>
                <div className={cx('cookies-setting')}>Cookie settings</div>
                <div className={cx('language-setting')}>
                    <FontAwesomeIcon icon={faEarth} />
                    <span>English</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
