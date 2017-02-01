import { connect } from 'react-redux';
import ExerciseZero from '../components/ExerciseZero';
import * as actions from '../actions';

// This is an "intelligent" component which is taking a "dumb" rendering component
//  and provides some Redux intelligence using the props.
// Meet me in ../actions/index.js after you've understood this file.

// Here are the values we want to take from the redux store's state,
// and provide to our component as props.
// We _map_ the store's state to a component's props. mapStateToProps.
const mapStateToProps = (state) => {
    return {
        // in this case we want the value for exercise0
        value: state.exercise0.value,
    };
};

// Here are the methods we want to give to the component.
// These methods dispatch (send to the store) actions,
// that will then be processed by Redux reducers
// (functions that receive an action and change the store data accordingly).
// We _map_ actions (well, dispatched actions) to a component's props.
const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (event) => {
            dispatch(actions.changeValue(event));
        },
    };
};

// This is creating a component based on ExerciseZero but
// adding the vars above into its props.
// connect is a redux function that creates the intermediary "intelligent" React component
// around the "dumb" React component.
const IntelligentExerciseZero = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExerciseZero);

export default IntelligentExerciseZero;
