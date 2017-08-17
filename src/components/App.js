import React, { Component } from 'react';
import Board from './board/Board';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            board: [
                ['red', 'blue'],
                ['blue', 'red'],
            ]
        }
    }

    render(){
        return(
            <Board board={this.state.board}/>

        );
    }
}

export default App;