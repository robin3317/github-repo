import BaseLayout from '../../components/BaseLayout/BaseLayout';
import Result from '../../components/Result/Result';
import Search from '../../components/Search/Search';
import styles from './Home.module.scss';

const HomePage = () => (
  <BaseLayout>
    <div className={styles.homeContainer}>
      <Search />
      <Result />
    </div>
  </BaseLayout>
);

export default HomePage;
