const Chess = () => {
	const board = []
	const makeBoard = () => {
		for (let i = 0; i < 8; i++) {
			board.push([])
		}
	}
	return {
		init: () => {
			makeBoard()
		},
		getBoard: () => {
			return board
		}
	}
}

(() => {
	const game = Chess()
	game.init()
	console.log(game.getBoard())
})()
