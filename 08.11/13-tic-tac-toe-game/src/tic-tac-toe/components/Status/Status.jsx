import { string } from 'prop-types';

Status.propTypes = {
  currentPlayerTurn: string,
};

function Status({ currentPlayerTurn }) {
  return <h2>현재 {currentPlayerTurn}의 차례</h2>;
}

export default Status;
