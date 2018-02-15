import React from 'react';
import './../App.css';
import { compose, withState, withHandlers } from 'recompose'

const enchance = compose(
    withState('step', 'setStep', 1),
    withHandlers({
        handleOnChangeStep: (props) => () => {
            console.log('test')
        }
    })
);
export default enchance((props) => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Progress Menu</h1>
        </header>
        <p className="App-intro">
            <input type="text" onChange={props.handleOnChangeStep} />
        </p>
    </div>
))
