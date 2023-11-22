import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../state/counter/counterSlice";
import { AppDispatch, RootState } from "../state/store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <h2>Counter</h2>
      <p>{count}</p>
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
    </>
  );
}
