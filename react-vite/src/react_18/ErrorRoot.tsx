import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorThrow from './ErrorThrow';

function ErrorRoot() {
  return (
    <div>
      <h1>Error Boundary外</h1>
      <ErrorBoundary fallback={<div>エラー発生</div>}>
        <ErrorThrow />
      </ErrorBoundary>
    </div>
  );
}

export default ErrorRoot;
