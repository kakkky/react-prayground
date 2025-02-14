/** Primary UI component for user interaction */
export const Circle = ({ variant }: Props) => {
  let bgColor;
  switch (variant) {
    case 'orange':
      bgColor = 'bg-orange-500';
      break;
    case 'green':
      bgColor = 'bg-green-500';
  }

  return <div className={`${bgColor} w-10 h-10 p-2 rounded-full`}></div>;
};

type Props = {
  variant: 'orange' | 'green' | 'yellow';
};
