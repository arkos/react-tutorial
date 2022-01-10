import React, { Component } from "react";
import Board from "../Board/Board";
import { calculateWinner } from "../../utils";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      isCurrentX: true,
    };
  }

  handleSquareClick(i) {
    const { history } = this.state;
    const currentMove = history[history.length - 1];

    const squares = [...currentMove.squares];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.isCurrentX ? `X` : `O`;

    const newHistory = history.concat([{ squares }]);

    this.setState({ history: newHistory });
    this.isCurrentX = !this.isCurrentX;
  }

  render() {
    const { history } = this.state;
    const currentMove = history[history.length - 1];

    const winner = calculateWinner(currentMove.squares);

    const status = winner
      ? `The winner is ${winner}`
      : `Next player is ${this.isCurrentX ? `X` : `O`}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentMove.squares}
            onSquareClick={(i) => this.handleSquareClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
