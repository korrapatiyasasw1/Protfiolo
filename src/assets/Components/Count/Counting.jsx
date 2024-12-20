import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount } from "./Slice";

export const Counting = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };
  const decrementCount = () => {
    dispatch(decrement());
  };
  const incrementByAmountCount = () => {
    dispatch(incrementByAmount());
  };
  return { count, incrementCount, decrementCount, incrementByAmountCount };
};