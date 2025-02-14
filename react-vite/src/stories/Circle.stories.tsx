import { Meta, StoryObj } from '@storybook/react';
import { Circle } from './Circle';

// Story Bookの設定
const meta: Meta<typeof Circle> = {
  component: Circle,
  title: 'Circle',
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
  },
  // ドキュメント作成
  tags: ['autodocs'],
};

//ストーリーに型をつける
type Story = StoryObj<typeof meta>;

export default meta;

/**
 * オレンジのえん
 */
export const BaseCircle: Story = {
  // コンポーネントに渡すプロップス変数
  args: {
    variant: 'green',
  },
};

/**グリーンのえん */
export const GreenCircle: Story = {
  // コンポーネントに渡すプロップス変数
  args: {
    variant: 'orange',
  },
};

export const GroupedCircle: Story = {
  render: () => (
    <div>
      <Circle variant="orange" />
      <Circle variant="green" />
    </div>
  ),
};
