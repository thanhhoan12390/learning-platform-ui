import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';

import searchApi from '~/api/searchApi';
import type { SearchItemInfo } from '~/models';
import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);

interface SearchItemProps {
    searchQuery: string;
}

function SearchItem({ searchQuery }: SearchItemProps) {
    const [searchItemData, setSearchItemData] = useState<SearchItemInfo>();

    useEffect(() => {
        async function getSearch() {
            try {
                const response: SearchItemInfo = await searchApi.getSearchInfo(searchQuery);
                setSearchItemData(response);
            } catch (error) {
                console.error(error);
            }
        }

        getSearch();
    }, [searchQuery]);

    return searchItemData ? (
        <div className={cx('wrapper')}>
            <Link to="" className={cx('container')}>
                <div className={cx('search-img')}>
                    <img
                        src={searchItemData.sprites.other['official-artwork'].front_default}
                        alt="search image"
                        height={32}
                        width={32}
                    />
                </div>
                <div className={cx('search-content')}>
                    <div className={cx('content-title')}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </div>
                    <div className={cx('content-course')}>
                        <div className={cx('course-text')}>Course</div>
                        <div className={cx('course-instructor')}>{searchItemData.name}</div>
                    </div>
                </div>
            </Link>
        </div>
    ) : null;
}

export default memo(SearchItem);
