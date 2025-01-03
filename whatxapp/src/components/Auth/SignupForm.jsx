import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import InputField from '../Shared/InputField';
import Button from '../Shared/Button';

const SignupForm = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
    } catch (err) {
      setError('Sign-up failed, please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <InputField
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignupForm;
