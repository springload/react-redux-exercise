import React from 'react';

import IntelligentExerciseZero from '../containers/IntelligentExerciseZero';
import IntelligentExerciseOne from '../containers/IntelligentExerciseOne';
import IntelligentExerciseTwo from '../containers/IntelligentExerciseTwo';

// This is where you build the skeleton of your App
// by displaying the right intelligent components
// Meet me in ../components/ExerciseZero after you've understood this file
const App = () => (
    <div>
        <IntelligentExerciseZero />
        <IntelligentExerciseOne />
        <IntelligentExerciseTwo />

        <h1>Exercise 3</h1>

        <div style={{ marginBottom: '10px' }}>
            <i>
                Build me from scratch!<br />
                I need to be a select field which will display the new selected value<br />
                BONUS POINT: and the previous selected value ;)<br />
                Select values are [&apos;&apos;, &apos;blue&apos;, &apos;white&apos;, &apos;red&apos;
                ] - default value = &apos;&apos;
            </i>
        </div>
    </div>
);

export default App;
