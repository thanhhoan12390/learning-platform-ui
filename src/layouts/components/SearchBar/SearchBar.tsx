import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '~/app/hooks';

import SearchItem from '../SearchItem';
import SearchAutoComplete from '../SearchAutoComplete';
import { getSearchList, searchBarSelector } from './searchBarSlice';
import { useDebounce } from '~/app/hooks';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');

    const dispatch = useAppDispatch();

    const searchResult = useAppSelector(searchBarSelector);

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        dispatch(getSearchList(debouncedValue));
    }, [debouncedValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    placeholder="Search for anything"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => {}}
                    className={cx('search-input')}
                    name="search input"
                />

                <button
                    className={cx('search-btn')}
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                    disabled={searchValue === ''}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-btn-icon')} />
                </button>
            </div>

            {searchResult.length > 0 && (
                <div className={cx('search-result')} tabIndex={-1}>
                    {searchResult.slice(0, 5).map((data, index) => (
                        <SearchAutoComplete key={index} searchText={data} />
                    ))}

                    {searchResult.slice(0, 7).map((data, index) => (
                        <SearchItem key={index} searchQuery={data} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
