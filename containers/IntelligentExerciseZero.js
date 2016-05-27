// This is an "intelligent" component which is taking a "dump" component and adds to it
// some intelligence using the props.
// Meet me in ../actions/index.js after you've understood this file
import { connect } from 'react-redux';
import ExerciseZero from '../components/ExerciseZero';
import * as actions from '../actions';

// Here are the values we want to take from the redux state
const mapStateToProps = (state) => {
    return {
        // in this case we want the value for exercise0 store/reducer
        value: state.exercise0.value,
    };
};

// Here are the methods we want to give to the component
// Usually these methods dispatch actions that will be managed by reducers
const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (event) => {
            dispatch(actions.changeValue(event));
        },
    };
};

// This is creating a component based on ExerciseZero but 
// adding the vars above into its props
const IntelligentExerciseZero = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseZero);

export default IntelligentExerciseZero;
