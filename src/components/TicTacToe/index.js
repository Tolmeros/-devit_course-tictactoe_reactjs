import React, {useCallback, useMemo, useState} from 'react';
import styles from './styles.module.css';
import Cell from "./Cell";
import Table from "./Table";

const combos = {
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

const checkForWinner = (squares) => {
  for (let combo in combos) {
    for (let pattern of combos[combo]) {
      if (
        squares[pattern[0]] === squares[pattern[1]] &&
        squares[pattern[1]] === squares[pattern[2]] &&
        squares[pattern[0]] !== ''
      ) {
        return squares[pattern[0]];
      }
    }
  }

  return null;
};

const TicTacToe = () => {
  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(''));

  const turnCount = useMemo(() => cells.reduce((count, cell) => {
    return cell ? count + 1 : count;
  }, 0), [cells]);

  const winner = useMemo(() => checkForWinner(cells), [cells])

  const isDraw = useMemo(() => {
    return !winner && turnCount === 9;
  }, [turnCount, winner]);

  const handleClick = useCallback((num) => {
    if (isDraw || winner) {
      alert('Game ended');
      return;
    }

    if (cells[num] !== '') {
      alert('Already clicked');
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

    setCells(squares);
  }, [cells, isDraw, winner]);

  const handleRestart = useCallback(
    () => setCells(Array(9).fill('')),
    []
  );

  return (
    <div className={styles.container}>
      <Table handleClick={handleClick} cells={cells}/>
      <p>Turn: {turn}</p>
      <p>Turn count: {turnCount}</p>
      {winner && (
        <>
          <p>{winner} is the winner!</p>
          <button onClick={handleRestart}>Play Again</button>
        </>
      )}
      {isDraw && (
        <>
          <p>Draw </p>
          <button onClick={handleRestart}>Play Again</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
