import { handleDecrement, handleIncrement } from "../redux/actions/countAction";

import { useDispatch } from "react-redux";

function EventCount() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(handleIncrement(5))}>increment</button>
      <button onClick={() => dispatch(handleDecrement(5))}>decrement</button>
    </div>
  );
}

export default EventCount;
