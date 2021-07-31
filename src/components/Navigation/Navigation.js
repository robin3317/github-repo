import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../store/action-creators/users.action-creators';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOutUser());
  };

  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.brandName}>
        Github Finder
      </Link>
      <ul>
        <li>
          <Link className={styles.link} to="/home">
            Home
          </Link>
        </li>
        <li>
          {currentUser ? (
            <Link className={styles.link} to="/" onClick={handleSignOut}>
              Sign out
            </Link>
          ) : (
            <Link className={styles.link} to="/">
              Registration/Signin
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
