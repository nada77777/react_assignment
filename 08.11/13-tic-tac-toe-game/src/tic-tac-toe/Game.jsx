import { useState } from 'react';
import Board from './components/Board/Board';
import History from './components/History/History';
import './styles/main.css';
import { checkwinner, INITIAL_SQUARES, PLAYER } from './constants';
import S from './Game.module.css';

function Game() {
  const [gameItems, setGameItems] = useState(INITIAL_SQUARES);

  // 사이드 이펙트 처리 함수
  const handleStartGame = (index) => {
    if (winnerInfo.player) {
      console.log(winnerInfo.player);
      alert(`${winnerInfo.player}의 승리`);
      return;
    }

    setGameItems((prevGameItems) =>
      prevGameItems.map((gameItem, idx) =>
        idx === index ? currentPlayerTurn : gameItem
      )
    );
  };

  //파생된 상태
  const checkPlayerTurn = gameItems.filter(Boolean).length % 2 === 0;
  const currentPlayerTurn = checkPlayerTurn ? PLAYER.ONE : PLAYER.TWO;
  console.log('currentPlayerTurn', currentPlayerTurn);

  const winnerInfo = checkwinner(gameItems);
  // console.log('winnerInfo', winnerInfo);
  return (
    <div className={S.component}>
      <Board
        gameItems={gameItems}
        onStartGame={handleStartGame}
        currentPlayerTurn={currentPlayerTurn}
      />
      <History />
    </div>
  );
}

export default Game;
