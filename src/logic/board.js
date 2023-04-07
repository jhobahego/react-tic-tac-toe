import { WINNING_COMBINATIONS } from "../contants"

export const checkWinner = (boardToCheck) => {
  for(const combo of WINNING_COMBINATIONS){
    const [a, b, c] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ){
      return boardToCheck[a]
    }
  }

  return null
}

export const checkEndGame = (board) => {
  return board.every(square => square !== null)
}