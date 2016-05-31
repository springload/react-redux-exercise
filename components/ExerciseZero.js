import React from 'react';

// This is what's wrapped into an "intelligent" component.
// This is a "dumb" component: it just displays data and calls functions,
// oblivious to the fact that Redux is used on the project.
// It's basically just displaying HTML and using the given props.
// Meet me in ../containers/IntelligentExerciseZero.js once you've understood this file
const ExerciseZero = React.createClass({ // eslint-disable-line react/prefer-stateless-function
    // it's considered better practice to specify into
    // the component all the props you are expecting.
    // Other developers then know what they can provide or need to provide.
    propTypes: {
        value: React.PropTypes.string.isRequired,
        changeValue: React.PropTypes.func.isRequired,
    },

    render() {
        const { value, changeValue } = this.props;

        return (
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
                    <label>
                        Change me:
                        <input
                            type="text"
                            name="exerciseZero"
                            value={value}
                            onChange={changeValue}
                        />
                    </label>
                </div>
            </div>
        );
    },
});

export default ExerciseZero;
