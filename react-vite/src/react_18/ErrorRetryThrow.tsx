import React from 'react';

function ErrorRetryThrow() {
  if (Math.random() > 0.5) {
    throw new Error('ERROR');
  }
  return <div>成功！！！！</div>;
}

export default ErrorRetryThrow;
