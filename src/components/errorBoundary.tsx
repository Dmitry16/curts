import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        console.log('error', error);
        console.log('info', info);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Oops!..Something went wrong :(</p>
                    <button onClick={() => console.log('Inform about error')}>Inform about error
                    </button>
                </div>
            );
        } else {
            return this.props.children;
        }
    }
}
