import { connect } from 'react-redux';
import ExerciseOne from '../components/ExerciseOne';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        name: state.exercise1.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buttonClicked: (event) => {
            dispatch(actions.buttonClicked(event));
        },
    };
};

const IntelligentExerciseOne = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExerciseOne);

export default IntelligentExerciseOne;
