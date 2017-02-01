import React, { PropTypes } from 'react';

// it's considered better practice to specify into
// the component all the props you are expecting.
// Other developers then know what they can provide or need to provide.
// I prefer to declare them at the beginning of the file
// so once you open the component you know directly what it needs to work.
const propTypes = {
    value: PropTypes.string.isRequired,
    changeValue: PropTypes.func.isRequired,
};

// This is what's wrapped into an "intelligent" component.
// This is a "dumb" component: it just displays data and calls functions,
// oblivious to the fact that Redux is used on the project.
// It's basically just displaying HTML and using the given props.
// The syntax is using ES6. To learn more about React Stateless components in ES6,
// please check this link: https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.tw7p0usxv
// Meet me in ../containers/IntelligentExerciseZero.js once you've understood this file
const ExerciseZero = ({ value, changeValue }) => (
    <div>
        <h1>Exercise 0</h1>
        <div style={{ marginBottom: '10px' }}>
            <i>
                Use this exercise as a reference for a working example.
                Follow me through the file comments.<br />
                Meet me in /index.js
            </i>
        </div>
        <div style={{ marginBottom: '5px' }}>Value: {value}</div>
        <div>
            <label htmlFor="input-exerciseZero">
                Change me:
                <input
                    id="input-exerciseZero"
                    type="text"
                    name="exerciseZero"
                    value={value}
                    onChange={changeValue}
                />
            </label>
        </div>
    </div>
);

ExerciseZero.propTypes = propTypes;

export default ExerciseZero;
