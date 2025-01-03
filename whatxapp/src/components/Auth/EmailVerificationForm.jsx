import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Button from '../Shared/Button';

const EmailVerificationForm = () => {
  const { verifyEmail } = useAuth();
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyEmail(verificationCode);
    } catch (err) {
      setError('Verification failed, please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="verification-form">
      <h2>Enter Verification Code</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        placeholder="Enter code from email"
      />
      <Button type="submit">Verify</Button>
    </form>
  );
};

export default EmailVerificationForm;
