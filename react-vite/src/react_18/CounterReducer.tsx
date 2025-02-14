import React, { useReducer } from 'react';

// 管理したい状態(State)の型
type State = {
  count: number;
};

// 状態を更新する(Action)の型
type Action =
  | {
      type: 'update';
      //   追加で渡す情報はpayloadに含める
      payload: {
        step: number;
      };
    }
  | {
      type: 'reset';
      payload: {
        init: number;
      };
    };

// リデューサーの型
type CountReducer = (state: State, action: Action) => State;

// リデューサー(Stateを更新するための関数)
const reducer: CountReducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, count: state.count + action.payload.step };
    case 'reset':
      return { ...state, count: action.payload.init };
    default:
      return state;
  }
};

const initialState: State = {
  count: 0,
};

const CounterReducer: React.FC = () => {
  // stateは状態
  // dispatch関数は、actionを元にReducer（状態を更新する関数）を呼び出す
  const [state, dispatch] = useReducer(reducer, initialState);
  const handlleAdd = () => {
    // dispatch経由でReducerを呼び出す
    dispatch({ type: 'update', payload: { step: 1 } });
  };
  const handleReset = () => {
    dispatch({ type: 'reset', payload: { init: 0 } });
  };
  return (
    <div>
      <p>カウント：{state.count}</p>
      <button onClick={handlleAdd}>+1</button>
      <button onClick={handleReset}>リセット</button>
    </div>
  );
};

export default CounterReducer;
