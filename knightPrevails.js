const Chess = () => {
  const board = [];
  const constants = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];

  const makeBoard = () => {
    for (let i = 0; i < 8; i++) {
      board.push([]);
    }
  };

  const possibleMoves = (position) => {
    const res = [];
    for (let i = 0; i < constants.length; i++) {
      if (
        position[0] + constants[i][0] < 0 ||
        position[1] + constants[i][1] < 0
      ) {
        continue;
      }
      if (
        position[0] + constants[i][0] > 7 ||
        position[1] + constants[i][1] > 7
      ) {
        continue;
      }
      res.push([position[0] + constants[i][0], position[1] + constants[i][1]]);
    }
    return res;
  };

  const findPath = (q, visited, to) => {
    if (q.length === 0) {
      return;
    }
    const current = q.shift();
    if (current[1].toString() == to.toString()) {
      visited.push(current);
      return;
    }
    // take possible moves into consideration
    let flag = true;
    visited.forEach((e) => {
      if (e[1].toString() === current[1].toString()) {
        flag = false;
      }
    });
    if (!flag) {
      return findPath(q, visited, to);
    }
    visited.push(current);
    // insert connected to q
    const possible = possibleMoves(current[1]);
    possible.forEach((v) => {
      let flag = true;
      visited.forEach((e) => {
        if (v.toString() == e.toString()) {
          flag = false;
        }
      });
      if (flag) {
        q.push([current[1], v]);
      }
    });
    return findPath(q, visited, to);
  };

  const shortestPath = (from, to) => {
    const q = [];
    const visited = [];
    q.push([null, from]);
    const res = [];

    findPath(q, visited, to);

    //trace back
    let ptr = visited.length - 1;

    while (visited[ptr]) {
      res.unshift(visited[ptr][1]);
      if (visited[ptr][0] == null) {
        break;
      }
      for (let i = visited.length - 1; i > -1; i--) {
        if (visited[i][1].toString() == visited[ptr][0].toString()) {
          ptr = i;
          break;
        }
      }
    }
    return res;
  };
  return {
    init: () => {
      makeBoard();
    },
    getBoard: () => {
      return board;
    },
    shortestPath: shortestPath,
  };
};

(() => {
  const game = Chess();
  game.init();
  console.log(game.shortestPath([0, 0], [7, 7]));
})();
