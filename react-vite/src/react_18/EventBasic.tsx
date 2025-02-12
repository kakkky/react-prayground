type Props = {
  type: string;
};
function EventBasic({ type }: Props) {
  const current = () => {
    const d = new Date();
    switch (type) {
      case 'date':
        console.log(d.toLocaleDateString());
        break;
      case 'time':
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log('none');
    }
  };
  return (
    <>
      <button onClick={current}>現在時刻/日時の取得</button>
    </>
  );
}

export default EventBasic;
