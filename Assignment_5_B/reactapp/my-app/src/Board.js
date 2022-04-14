import React from 'react';
import { MoveCounter } from './MoveCounter';
import {Square} from './Square';

export class Board extends React.Component {
  
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          id={i}
        />
      );
    }
    
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
            <MoveCounter count={this.props.stepNumber} />
          </div>
          // enhancement # 2
        );
    }
}