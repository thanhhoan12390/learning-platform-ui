import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SubNav.module.scss';

const cx = classNames.bind(styles);

interface SubNavProps {
    className?: string;
    to: string;
    title: string;
    subContent: {
        subUrl: string;
        subTitle: string;
    }[];
}

function SubNav({ to, title, subContent, className }: SubNavProps) {
    return (
        <div className={cx('wrapper', className)}>
            <Link to={to} className={cx('sub-nav-btn')}>
                {title}
            </Link>
            <div className={cx('sub-nav-content')}>
                <div className={cx('nav-link-list')}>
                    {subContent.map((item, index) => (
                        <Link to={item.subUrl} className={cx('sub-nav-item')} key={index}>
                            {item.subTitle}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SubNav;
