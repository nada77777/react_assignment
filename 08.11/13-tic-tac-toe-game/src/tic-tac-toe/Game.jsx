import { useState } from 'react';
import Board from './components/Board/Board';
import History from './components/History/History';
import './styles/main.css';
import { INITIAL_SQUARES } from './constants';
import S from './Game.module.css';

function Game() {
  const [gameItems, setGameItems] = useState(INITIAL_SQUARES);
  console.log('gameItems', gameItems);
  return (
    <div className={S.component}>
      <Board gameItems={gameItems} />
      <History />
    </div>
  );
}

export default Game;
