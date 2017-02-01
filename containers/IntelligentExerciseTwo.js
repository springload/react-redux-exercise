import { connect } from 'react-redux';
import ExerciseTwo from '../components/ExerciseTwo';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        hasTickedBox: state.exercise2.hasTickedBox,
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
    mapDispatchToProps,
)(ExerciseTwo);

export default IntelligentExerciseTwo;
