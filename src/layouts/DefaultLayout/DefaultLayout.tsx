import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
    children: React.ReactElement;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
