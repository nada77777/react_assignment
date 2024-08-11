import { func, number, node } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
  onStartGame: func,
  index: number,
};

// 상태를 가지지 않는(Stateless) 컴포넌트
function Square({ children, onStartGame, index }) {
  const isDisabled = !!children;
  return (
    <button
      onClick={() => onStartGame(index)}
      className={S.button}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Square;
