import classNames from 'classnames/bind';

import Divider from '~/components/Divider';
import NavBar from '~/components/NavBar';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Divider />
            <NavBar />
        </div>
    );
}

export default Home;
