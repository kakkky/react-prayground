function SpreadAttr() {
  const attrs = {
    href: 'https://wings.msn.to/',
    download: true,
    target: '_blank',
    rel: 'help',
  };
  return (
    <>
      <h3>スプレッド構文でa属性を展開</h3>
      <a {...attrs}>サポート</a>
    </>
  );
}

export default SpreadAttr;
