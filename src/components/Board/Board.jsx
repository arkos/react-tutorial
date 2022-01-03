import { bind } from "bluebird";
import React, { Component } from "react";
import Square from "../Square/Square";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
        this.isCurrentX = true;
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }

    handleSquareClick(i) {
        const squares = [...this.state.squares];
        squares[i] = this.isCurrentX ? `X` : `O`;

        this.setState({ squares });
        this.isCurrentX = !this.isCurrentX;
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onSquareClick={() => this.handleSquareClick(i)}
            />
        );
    }

    render() {
        const status = `Next player: X`;

        return (
            <div>
                <div className="status">{status}</div>
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
            </div>
        );
    }
}

export default Board;
