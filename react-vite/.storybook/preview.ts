import type { Preview } from '@storybook/react';
// index.cssをインポートしないとtailwindcssが当たらん
import '@/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
