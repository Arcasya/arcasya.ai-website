import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const validatePasswordStrength = (pass: string) => {
    if (pass.length < 6) return 'Weak';
    if (pass.length < 10) return 'Medium';
    return 'Strong';
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(validatePasswordStrength(value));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) return setError('Passwords do not match.');
    if (!agreeTerms) return setError('You must agree to the terms.');
    if (passwordStrength === 'Weak') return setError('Password is too weak.');
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setError('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      <div className="w-full max-w-md p-10 bg-gray-900/80 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-md ml-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">
          Sign Up for Arcasya.ai
        </h2>

        <form onSubmit={handleSignUp} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {password && (
            <p className={`text-xs mt-2 ${
              passwordStrength === 'Strong' ? 'text-green-400' :
              passwordStrength === 'Medium' ? 'text-yellow-400' : 'text-red-400'
            }`}>
              Password Strength: {passwordStrength}
            </p>
          )}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="flex items-center text-sm text-gray-300">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <span>
              I agree to the{' '}
              <a href="#" className="text-blue-400 hover:underline">Terms</a> and{' '}
              <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
            </span>
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-400 text-sm text-center">
              Account created successfully!
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 mt-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
