/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import ResultCard from './Result/ResultCard';
import styles from './Results.module.scss';

const Results = () => {
  const { allRepos, reposLoading, reposError } = useSelector((state) => state.repos);

  return (
    <div className={styles.container}>
      {allRepos &&
        allRepos.total_count >= 0 &&
        !reposLoading &&
        !reposError &&
        allRepos.items &&
        allRepos.items.map((repo) => (
          <ResultCard
            resultObj={{
              fullName: repo.full_name,
              cloneUrl: repo.clone_url,
              description: repo.description,
              starsCount: repo.stargazers_count,
              forksCount: repo.forks_count,
              owner: repo.owner,
            }}
            key={repo.id}
          />
        ))}

      {!reposLoading && allRepos && allRepos.total_count === 0 && (
        <h3>Could not find any repo related to your search, plese try again with different one!</h3>
      )}

      {reposLoading && <h3>Loading...</h3>}
    </div>
  );
};

export default Results;
