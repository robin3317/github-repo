import { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import styles from './Signin.module.scss';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // await auth.signInWithEmailAndPassword(email, password);
    setEmail('');
    setPassword('');
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
          id="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />

        <FormInput
          type="password"
          id="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
        />

        <div className={styles.signinButtonContainer}>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton className="googleSigninButton">SIGN IN WITH GOOGLE</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;
