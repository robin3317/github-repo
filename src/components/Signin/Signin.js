import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../../store/action-creators/users.action-creators';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import styles from './Signin.module.scss';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { currentUser, createUserLoading, createUserError } = useSelector((state) => state.user);

  console.log(`
    currentUser: ${currentUser},
    cureateUserLoading: ${createUserLoading},
    createUserError: ${createUserError}
  `);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signInUser({ email, password, isGoogleSignIn: false }));
  };

  const handleGoogleSignIn = () => {
    dispatch(signInUser({ isGoogleSignIn: true }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.signinContainer}>
      <h2 className={styles.signinTitle}>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          id="signInEmail"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />

        <FormInput
          type="password"
          id="signInPassword"
          name="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
        />

        <div className={styles.signinButtonContainer}>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" className="googleSigninButton" onClick={handleGoogleSignIn}>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;
