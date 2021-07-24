import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRepos } from '../../store/action-creators/repos.action-creators';
import Alert from '../../tools/Alert/Alert';
import CustomButton from '../CustomButton/CustomButton';
import styles from './Search.module.scss';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const onSearchHandler = (event) => {
    event.preventDefault();

    if (query === '' || !query) {
      Alert({
        type: 'warning',
        message: 'Empty field search! Please write any topic or language.',
      });
      return;
    }

    dispatch(fetchRepos({ query }));
  };

  return (
    <div className={styles.searchContainer}>
      <form className={styles.form}>
        <input
          onChange={onChangeHandler}
          className={styles.searchInput}
          placeholder="Search by topic or language"
          value={query}
        />
        <CustomButton type="submit" onClick={onSearchHandler}>
          Search
        </CustomButton>
      </form>
    </div>
  );
};

export default Search;
