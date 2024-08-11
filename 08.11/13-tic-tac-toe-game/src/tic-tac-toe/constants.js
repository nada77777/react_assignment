// 초기 상태
export const INITIAL_SQUARES = Array(9).fill(null);

export const PLAYER = {
  ONE: '🏁',
  TWO: '🏴',
};

export const winnerInfo = {
  player: null,
  condition: [],
};

export const WINNTER_CONDITION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 4, 8],
  [2, 4, 6],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

export function checkwinner(gameItems) {
  for (const [a, b, c] of WINNTER_CONDITION) {
    const winner = gameItems[a];
    if (winner && winner === gameItems[b] && gameItems[b] === gameItems[c]) {
      console.log('동일');
      console.log(gameItems[a], gameItems[b], gameItems[c]);

      winnerInfo.player = winner;
      winnerInfo.condition = [a, b, c];
      break;
    }
    // console.log(gameItems[a], gameItems[b], gameItems[c]);
  }
  return winnerInfo;
}
