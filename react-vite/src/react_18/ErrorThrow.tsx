import React from 'react';

function ErrorThrow() {
  throw new Error('ERROR');
  return <div>ErrorThrow</div>;
}

export default ErrorThrow;
