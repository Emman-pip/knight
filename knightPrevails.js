const Chess = () => {
	const board = []
	const constants =
		[[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]]

	const makeBoard = () => {
		for (let i = 0; i < 8; i++) {
			board.push([])
		}
	}

	const possibleMoves = (position) => {
		const res = []
		for (let i = 0; i < constants.length; i++) {
			if (position[0] + constants[i][0] < 0 || position[1] + constants[i][1] < 0) { continue }
			if (position[0] + constants[i][0] > 7 || position[1] + constants[i][1] > 7) { continue }
			res.push([position[0] + constants[i][0], position[1] + constants[i][1]])

		}
		return res
	}

	const findPath = (q, visited, to) => {
		console.log("q", q)
		console.log("v", visited)
		if (q.length === 0) {
			return
		}
		const current = q.shift()
		if (current.toString() == to.toString()) {
			console.log("TRUE", current, to)
			visited.push(current)
			console.log("v", visited)
			return
		}
		// take possible moves into consideration
		let flag = true
		visited.forEach(e => {
			if (e.toString() === current.toString()) {
				console.log("falsified", current, "exists")
				flag = false
			}
		})
		if (!flag) {
			return findPath(q, visited, to)
		}
		visited.push(current)
		// insert connected to q 
		const possible = possibleMoves(current);
		possible.forEach(v => {
			let flag = true
			visited.forEach(e => {
				if (v.toString() == e.toString()) {
					flag = false
				}
			})
			if (flag) {
				q.push(v)
			}
		})
		return findPath(q, visited, to)
	}

	const shortestPath = (from, to) => {
		const q = []
		const visited = []
		q.push(from)
		const res = []

		findPath(q, visited, to)
	}
	return {
		init: () => {
			makeBoard()
		},
		getBoard: () => {
			return board
		},
		shortestPath: shortestPath
	}
}

(() => {
	const game = Chess()
	game.init()
	game.shortestPath([0, 0], [3, 6])
	// console.log(game.possible([1, 0]))
	// console.log(game.getBoard())
})()
