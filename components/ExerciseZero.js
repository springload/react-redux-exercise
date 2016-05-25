import * as React from 'react';

export default class ExerciseZero extends React.Component {
    render() {
        const { value } = this.props;
        return (
            <div>
                <h1>Exercise 0</h1>
                <div style={{marginBottom: '10px'}}><small>Use this exercise as a reference for a working example</small></div>
                <div style={{marginBottom: '5px'}}>Value: {value}</div>
                <div>
                    <label>
                        Change me: 
                        <input 
                            type="text" 
                            name="exerciseZero" 
                            value={this.props.value}
                            onChange={this.props.changeValue} 
                        />
                    </label>
                </div>
            </div>
        );
    }
}
