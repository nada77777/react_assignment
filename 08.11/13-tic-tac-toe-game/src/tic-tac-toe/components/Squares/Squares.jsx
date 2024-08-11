import Square from '../Square/Square';
import S from './Squares.module.css';
// 상태를 가지지 않는(Stateless) 컴포넌트
function Squares({ gameItems }) {
  return (
    <div className={S.component}>
      {gameItems.map((item, index) => (
        <Square key={index}>{item}</Square>
      ))}
    </div>
  );
}

export default Squares;
