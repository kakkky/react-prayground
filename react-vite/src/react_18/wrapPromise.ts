function wrapPromise(promise: Promise<string | Error>) {
  let status: 'pending' | 'fulfilled' | 'rejected' = 'pending';
  let data: Error | string;

  const wrapper = promise.then(
    (result) => {
      status = 'fulfilled';
      data = result;
    },
    (e) => {
      status = 'rejected';
      data = e;
    },
  );
  //   Promiseの状態に応じて値を返すgetメソッドを持つオブジェクト
  //   メソッド記法
  return {
    get(): string | Error | Promise<string> | undefined {
      switch (status) {
        case 'fulfilled':
          return data;
        case 'rejected':
          throw data;
        case 'pending':
          throw wrapper;
        default:
          break;
      }
    },
  };
}

export default wrapPromise;
