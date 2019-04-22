import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions";

const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = Map({
  number: 0
});

export default handleActions({
  [INCREMENT]: (state, action) => {
    let number = state.get("number");
    return state.set("number", number + action.payload);
  },
  [DECREMENT]: (state, action) => {
    let number = state.get("number");
    return state.set("number", number - action.payload);
  }
}, initialState);