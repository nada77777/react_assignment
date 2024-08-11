import Square from '../Square/Square';
import S from './Squares.module.css';
import { array, func } from 'prop-types';

Squares.propTypes = {
  gameItems: array,
  onStartGame: func,
};

// 상태를 가지지 않는(Stateless) 컴포넌트
function Squares({ gameItems, onStartGame }) {
  return (
    <div className={S.component}>
      {gameItems.map((item, index) => (
        <Square key={index} onStartGame={onStartGame} index={index}>
          {item}
        </Square>
      ))}
    </div>
  );
}

export default Squares;
