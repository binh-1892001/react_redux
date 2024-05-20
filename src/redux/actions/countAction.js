import { DECREMENT, INCREMENT } from "../constants/countConstant"

export const handleIncrement = (payload) => ({
  type: INCREMENT,
  payload
});

export const handleDecrement = (payload) => ({
  type: DECREMENT,
  payload
})