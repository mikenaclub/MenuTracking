import React from 'react';
import './../App.css';
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import io from 'socket.io-client'


const enchance = compose(
    withState('step', 'setStep', 1),
    withState('socket', 'setSocket', io("http://localhost:3000/trackMenu")),
    withHandlers({
        handleOnChangeStep: (props) => (event) => {
            console.log(event.target.value)
            props.socket.emit('msg', event.target.value)
        }
    }),
    lifecycle({
        componentDidMount() {
            this.props.socket.on('connect', function (data) {
                this.props.socket.emit('msg', 'App connected')
            });
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
