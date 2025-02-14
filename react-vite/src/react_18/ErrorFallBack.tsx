import React from 'react';
import { FallbackProps } from 'react-error-boundary';

function ErrorFallBack({ error, resetErrorBoundary }: FallbackProps) {
  const handleClick = () => {
    resetErrorBoundary();
  };
  return (
    <>
      <div className="border border-black m-10">
        <div>ErrorFallBack</div>
        <p>エラーメッセージ : {error.message}</p>
        <button
          type="button"
          onClick={handleClick}
          className="border bg-gray-500 text-white"
        >
          リトライ
        </button>
      </div>
    </>
  );
}

export default ErrorFallBack;
