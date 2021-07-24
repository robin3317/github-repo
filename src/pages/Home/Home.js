import { useSelector } from 'react-redux';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import Results from '../../components/Results/Results';
import Search from '../../components/Search/Search';
import styles from './Home.module.scss';

const HomePage = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <BaseLayout>
      {currentUser ? (
        <div className={styles.homeContainer}>
          <Search />
          <Results />
        </div>
      ) : (
        <p className={styles.warning}>
          You have to register first to use this repo search application. If you already register,
          please sign in and try again! Thanks for your patience!
          <br />
          <br />
          Eventually some features will be added, then you may use this search feature without sign
          in :)
        </p>
      )}
    </BaseLayout>
  );
};

export default HomePage;
