import S from './Square.module.css';

// 상태를 가지지 않는(Stateless) 컴포넌트
function Square({ children }) {
  return <button className={S.button}>{children}</button>;
}

export default Square;
