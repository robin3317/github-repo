import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRepos } from '../../store/action-creators/repos.action-creators';
import CustomButton from '../CustomButton/CustomButton';
import styles from './Search.module.scss';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const onSearchHandler = () => {
    dispatch(fetchRepos({ query }));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        onChange={onChangeHandler}
        className={styles.searchInput}
        placeholder="Search by topic or language"
        value={query}
      />
      <CustomButton onClick={onSearchHandler}>Search</CustomButton>
    </div>
  );
};

export default Search;
