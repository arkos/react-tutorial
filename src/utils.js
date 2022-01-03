const calculateWinner = (squares) => {
    const winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let winner = null;

    winLines.forEach((line) => {
        const [c1, c2, c3] = [...line];

        if (
            !winner &&
            squares[c1] &&
            squares[c1] === squares[c2] &&
            squares[c1] === squares[c3]
        ) {
            winner = squares[c1];
        }
    });

    return winner;
};

export { calculateWinner };
