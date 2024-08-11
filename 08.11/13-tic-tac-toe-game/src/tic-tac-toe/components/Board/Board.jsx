import { func, array, string } from 'prop-types';
import Squares from '../Squares/Squares';
import Status from '../Status/Status';
import S from './Board.module.css';

Board.propTypes = {
  gameItems: array,
  onStartGame: func,
  currentPlayerTurn: string,
};

// Stateless Component
function Board({ gameItems, onStartGame, currentPlayerTurn }) {
  return (
    <div className={S.component}>
      <Status currentPlayerTurn={currentPlayerTurn} />
      <Squares gameItems={gameItems} onStartGame={onStartGame} />
    </div>
  );
}

export default Board;
