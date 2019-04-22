import Counter from "/components/Counter";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as counterActions from "/modules/counter";

// class CounterContainer extends React.Component {
//   handleClick = (e) => {

//   }

//   handleDoubleClick = (e) => {

//   }

//   render() {
//     return (
//       <Counter />
//     );
//   }
// }

export default connect(
  (state) => ({
    number: state.counter.get('number')
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(Counter);