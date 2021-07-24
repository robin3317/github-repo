import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/action-creators/users.action-creators';
import Alert from '../../tools/Alert/Alert';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import styles from './Signup.module.scss';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  // const { currentUser, authUserLoading, authUserError } = useSelector((state) => state.user);

  // console.log(`
  //   currentUser: ${currentUser},
  //   cureateUserLoading: ${authUserLoading},
  //   createUserError: ${authUserError}
  // `);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { password, confirmPassword } = credentials;

    if (password !== confirmPassword) {
      Alert({ type: 'warning', message: 'Password not match!' });
      return;
    }

    dispatch(createUser(credentials));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const { username, email, password, confirmPassword } = credentials;

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupTitle}>I dont have an account</h2>
      <span>Sign up with your credentials</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          value={username}
          handleChange={handleChange}
          required
          label="Username"
          id="signUpUsername"
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
          id="signUpEmail"
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
          id="signUpPassword"
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required
          label="Confirm Password"
          id="signUpconfirmPassword"
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default Signup;
