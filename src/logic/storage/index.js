export const saveGameToLocalStorage = ({ board, turn }) => {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const resetGameLocalStorage = () => {
  localStorage.removeItem('board')
  localStorage.removeItem('turn')
}