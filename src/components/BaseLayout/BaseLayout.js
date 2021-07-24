import Navigation from '../Navigation/Navigation';
import styles from './BaseLayout.module.scss';

const BaseLayout = ({ className, children }) => (
  <div className={`${styles.baseLayout} ${className && className}`}>
    <Navigation />
    <div className={styles.baseLayoutBody}>{children}</div>
  </div>
);

export default BaseLayout;
