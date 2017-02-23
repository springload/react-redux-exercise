import React, { PropTypes } from 'react';

const propTypes = {
    name: PropTypes.string.isRequired,
    buttonClicked: PropTypes.func.isRequired,
};

// This component should stay "dumb" (i.e. stateless)
// It should not have it's own state and should only use props
const ExerciseOne = ({ name, buttonClicked }) => (
    <div>
        <h1>Exercise 1</h1>
        <div style={{ marginBottom: '5px' }}>Instructions: I want to know which button (use its name) has been clicked.</div>
        <div style={{ marginBottom: '10px' }}><i>TODO: Implement the action for this Redux cycle</i></div>
        <div style={{ marginBottom: '5px' }}>{name} just got clicked!</div>
        <div>
            <button name="Button 1" onClick={buttonClicked}>Button 1</button>
            <button name="Button 2" onClick={buttonClicked}>Button 2</button>
        </div>
    </div>
);

ExerciseOne.propTypes = propTypes;

export default ExerciseOne;
