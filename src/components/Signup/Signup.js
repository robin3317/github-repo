import { useState } from 'react';
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { password, confirmPassword } = credentials;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      // const { user } = await auth.createUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // await createUserProfileDocument(user, { displayName });
      // this.setState({
      //   displayName: '',
      //   email: '',
      //   password: '',
      //   confirmPassword: '',
      // });
    } catch (error) {
      console.error(error);
    }
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
          id="username"
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
          id="email"
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
          id="password"
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required
          label="Confirm Password"
          id="confirmPassword"
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default Signup;
