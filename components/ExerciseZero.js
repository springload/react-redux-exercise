// This is what's wrapped into an "intelligent" component.
// This is a "dumb" component
// Ideally it should be a stateless component
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
// It's basically just displaying HTML and using the given props.
// Meet me in ../containers/IntelligentExerciseZero.js once you've understood this file

import * as React from 'react';

// This component should stay "dumb"
// It should not have it's own state and should only use props
class ExerciseZero extends React.Component {
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
    }
}

// it's considered better practice to specify into
// the component all the props you are expecting.
ExerciseZero.propTypes = {
    value: React.PropTypes.string.isRequired,
    changeValue: React.PropTypes.func.isRequired,
};

export default ExerciseZero;
