import React, { lazy, Suspense } from 'react';

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
//   動的インポート(遅延コンポーネント)したコンポーネントを通常コンポーネントとして使える
const LazyButton = lazy(() => sleep(1000).then(() => import('./LazyButton')));

function Susp() {
  return (
    <div>
      <Suspense fallback={<p>Now loading...</p>}>
        <LazyButton />
      </Suspense>
    </div>
  );
}

export default Susp;
