import { connect } from 'react-redux';
import ExerciseTwo from '../components/ExerciseTwo';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        // uncomment me when you start the exercise 2
        // hasTickedBox: state.exercise2.hasTickedBox,
        // delete me when you start the exercise 2
        hasTickedBox: 'false',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        boxTicked: (event) => {
            dispatch(actions.boxTicked(event));
        },
    };
};

const IntelligentExerciseTwo = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseTwo);

export default IntelligentExerciseTwo;
