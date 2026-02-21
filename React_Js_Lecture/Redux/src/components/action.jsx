import { INCREMENT,DECREMENT,RESET } from "./constant";

export const increase = ()=>({type:INCREMENT});
export const decrease = ()=>({type:DECREMENT});
export const reset = ()=>({type:RESET});