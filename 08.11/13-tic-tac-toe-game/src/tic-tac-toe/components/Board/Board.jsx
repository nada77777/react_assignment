import Squares from '../Squares/Squares';
import S from './Board.module.css';
// Stateless Component
function Board({ gameItems }) {
  return (
    <div className={S.component}>
      <Squares gameItems={gameItems} />
    </div>
  );
}

export default Board;
