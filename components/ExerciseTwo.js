import * as React from 'react';

// This component should stay "dumb"
// It should not have it's own state and should only use props
class ExerciseTwo extends React.Component {
    render() {
        const { hasTickedBox, boxTicked } = this.props;
        return (
            <div>
                <h1>Exercise 2</h1>
                <div style={{marginBottom: '10px'}}><i>Implement the reducer for this Redux cycle</i></div>
                <div style={{marginBottom: '5px'}}>{hasTickedBox === 'true' ? 'Kewl!' : 'I need you to tick this box' }</div>
                <div>
                    <label>
                        <input type="checkbox" name="box" value={hasTickedBox === 'true' ? 'false' : 'true'} onClick={boxTicked} /> box
                    </label>
                </div>
            </div>
        );
    }
}

ExerciseTwo.propTypes = {
    hasTickedBox: React.PropTypes.string.isRequired,
    boxTicked: React.PropTypes.func.isRequired,
};

export default ExerciseTwo;
