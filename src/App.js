import React, { Component } from 'react';

import AVENGERS from './data/avengersData';
import AvengerList from './components/AvengersList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avengers: AVENGERS
        }
    }
    render() {
        return (
            <div>
                <h1>The Avengers!</h1>
                <AvengerList avengers={ this.state.avengers }/>
            </div>);
    }
}

export default App;