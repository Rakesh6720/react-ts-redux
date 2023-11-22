import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from "../state/counter/counterSlice";
import { AppDispatch, RootState } from "../state/store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const isLoading = useSelector((state: RootState) => state.counter.isLoading);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <h2>Counter</h2>
      {isLoading ? <p>---</p> : <p>{count}</p>}
      <div
        style={{
          width: 300,
          marginTop: 25,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div
        style={{
          marginTop: 25,
          width: 300,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment +10 Async
        </button>
      </div>
      <div
        style={{
          marginTop: 25,
          width: 300,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={() => dispatch(decrementAsync(10))}>
          Decrement -10 Async
        </button>
      </div>
    </>
  );
}
