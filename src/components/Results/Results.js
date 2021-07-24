/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import CustomPagination from '../CustomPagination/CustomPagination';
import styles from './Results.module.scss';

const Results = () => {
  const { allRepos, reposLoading, reposError } = useSelector((state) => state.repos);

  return (
    <div className={styles.container}>
      {allRepos && allRepos.total_count >= 0 && !reposLoading && !reposError && allRepos.items && (
        <CustomPagination data={allRepos} />
      )}

      {!reposLoading && allRepos && allRepos.total_count === 0 && (
        <h3>Could not find any repo related to your search, plese try again with different one!</h3>
      )}

      {reposLoading && <h3>Loading...</h3>}
    </div>
  );
};

export default Results;
