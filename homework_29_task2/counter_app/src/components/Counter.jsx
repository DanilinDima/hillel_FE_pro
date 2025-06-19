import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';
import './Counter.css'; 

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="btn-group">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}
