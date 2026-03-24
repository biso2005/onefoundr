'use client';

import { useState, useId, FormEvent } from 'react';

interface EmailSignupFormProps {
  variant: 'default' | 'dark' | 'green';
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

export default function EmailSignupForm({
  variant = 'default',
  buttonText = 'Subscribe',
  placeholder = 'Enter your email',
  className = '',
}: EmailSignupFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const emailId = useId();
  const errorId = useId();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email');
      return;
    }

    // Simulate API call
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      // In future: integrate with ConvertKit/Beehiiv
    }, 500);
  };

  // Styling based on variant
  const getInputStyles = () => {
    const baseStyles = 'flex-1 min-w-0 px-4 py-3 text-base placeholder-gray-400 transition-all duration-200 disabled:opacity-50';
    
    switch (variant) {
      case 'default':
        return `${baseStyles} border-2 border-gray-200 bg-white rounded-l-xl md:rounded-l-xl rounded-xl md:rounded-none ${
          status === 'error' ? 'border-red-400' : ''
        }`;
      case 'dark':
        return `${baseStyles} bg-gray-800 border border-gray-600 text-white rounded-l-xl md:rounded-l-xl rounded-xl md:rounded-none`;
      case 'green':
        return `${baseStyles} bg-white border-none rounded-l-lg md:rounded-l-lg rounded-lg md:rounded-none text-gray-900`;
      default:
        return baseStyles;
    }
  };

  const getButtonStyles = () => {
    const baseStyles = 'px-6 py-3 font-semibold transition-all duration-200 disabled:opacity-50 cursor-pointer md:cursor-pointer whitespace-nowrap';
    
    switch (variant) {
      case 'default':
        return `${baseStyles} bg-accent text-white hover:bg-opacity-90 rounded-r-xl md:rounded-r-xl rounded-xl md:rounded-none`;
      case 'dark':
        return `${baseStyles} bg-emerald-500 text-white hover:bg-emerald-400 rounded-r-xl md:rounded-r-xl rounded-xl md:rounded-none`;
      case 'green':
        return `${baseStyles} bg-primary text-white hover:bg-opacity-90 rounded-r-lg md:rounded-r-lg rounded-lg md:rounded-none`;
      default:
        return baseStyles;
    }
  };

  const getSuccessTextColor = () => {
    switch (variant) {
      case 'default':
        return 'text-accentDark';
      case 'dark':
        return 'text-accentDark';
      case 'green':
        return 'text-white';
      default:
        return 'text-gray-900';
    }
  };

  const getErrorTextColor = () => {
    switch (variant) {
      case 'default':
        return 'text-red-500';
      case 'dark':
        return 'text-red-400';
      case 'green':
        return 'text-red-200';
      default:
        return 'text-red-500';
    }
  };

  // Success State
  if (status === 'success') {
    return (
      <div className={className}>
        <p className={`${getSuccessTextColor()} font-semibold text-base`}>✅ You're in! Check your inbox.</p>
        <p className={`${getSuccessTextColor()} text-sm opacity-80 mt-1`}>We'll send you a welcome email shortly.</p>
      </div>
    );
  }

  // Form State
  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col md:flex-row gap-3 md:gap-0">
        <label htmlFor={`email-${emailId}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${emailId}`}
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          disabled={status === 'loading'}
          aria-describedby={status === 'error' ? errorId : undefined}
          className={getInputStyles()}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={getButtonStyles()}
        >
          {status === 'loading' ? '...' : buttonText}
        </button>
      </form>

      {/* Error Message */}
      {status === 'error' && (
        <p id={errorId} className={`${getErrorTextColor()} text-xs mt-2`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}
