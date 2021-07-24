import { useSelector } from 'react-redux';
import styles from './Result.module.scss';

const Result = () => {
  const { allRepos, reposLoading, reposError } = useSelector((state) => state.repos);
  return (
    <div className={styles.container}>
      {allRepos &&
        !reposLoading &&
        !reposError &&
        allRepos.items.map((repo) => <h2 key={repo.id}>{repo.full_name}</h2>)}
    </div>
  );
};

export default Result;
