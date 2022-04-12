import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
	const [turn, setTurn] = useState('x');
  const [turnCount, setTurnCount] = useState(0);
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();
  const [gameDraw, setGameDraw] = useState(false);

	const checkForWinner = (squares) => {
		let combos = {
			horizontal: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			vertical: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagonal: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
        if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]] &&
          squares[pattern[0]] !== ''
				) {
          setWinner(squares[pattern[0]]);
				}
			});
		}
	};

	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('Already clicked');
			return;
		}

    if (gameDraw || winner) {
      alert('Game ended');
			return;
    }

		let squares = [...cells];

		if (turn === 'x') {
			squares[num] = 'x';
			setTurn('o');
		} else {
			squares[num] = 'o';
			setTurn('x');
		}

		checkForWinner(squares);
		setCells(squares);

    if (turnCount<8) {
      setTurnCount(turnCount + 1);
    } 
    else {
      {
        setTurnCount(turnCount + 1);
        if (winner == null) {
          setGameDraw(true);
        }
      }
    }

    /*
    if ((turnCount>=8) && (winner == null)) {
      setGameDraw(true);
    }
    setTurnCount(turnCount + 1);
    */
  };

	const handleRestart = () => {
		setWinner(null);
    setTurnCount(0);
    //setTurn('x'); // make checkbox?
		setCells(Array(9).fill(''));
    setGameDraw(false);
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	return (
		<div className='container'>
			<table>
				<p>Turn: {turn}</p>
        <p>Turn count: {turnCount}</p>
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<p>{winner} is the winner!</p>
					<button onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
      {gameDraw && (
				<>
					<p>Draw </p>
					<button onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
		</div>
	);
};

export default TicTacToe;
