import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorRetryThrow from './ErrorRetryThrow';
import ErrorFallBack from './ErrorFallBack';

function ErrorRetryRoot() {
  const handleReset = () => console.log('Reset');
  return (
    <div>
      <h3>メイン</h3>
      <ErrorBoundary onReset={handleReset} FallbackComponent={ErrorFallBack}>
        <ErrorRetryThrow />
      </ErrorBoundary>
    </div>
  );
}

export default ErrorRetryRoot;
