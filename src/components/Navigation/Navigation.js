import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to="/" className={styles.brandName}>
      Github Repo
    </Link>
    <ul>
      <li>
        <Link className={styles.link} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/home">
          Registration/Signin
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
