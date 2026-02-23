import { INCREMENT ,DECREMENT ,RESET } from "./constant";

export const increment = () => ({
                type: INCREMENT});

export const decrement = () => ({
                type: DECREMENT});
export const reset = () => ({
                type: RESET});








/*

REDUX DATA FLOW

1. Componrnt
2. Dispatch Action
3. Action
4.  Reducer
5. calculate new state
6. Store Update
7. Component rerender with new state         

*/