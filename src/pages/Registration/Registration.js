import BaseLayout from '../../components/BaseLayout/BaseLayout';
import Signin from '../../components/Signin/Signin';
import Signup from '../../components/Signup/Signup';
import styles from './Registration.module.scss';

const RegistrationPage = () => (
  <BaseLayout>
    <div className={styles}>
      <Signin />
      <Signup />
    </div>
  </BaseLayout>
);

export default RegistrationPage;
