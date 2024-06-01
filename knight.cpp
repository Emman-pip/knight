#include <iostream>
#include <vector>

using namespace std;

class Board {
private:
  vector<vector<int>> moves;
  void populateMoves() {
    moves.push_back(vector<int>({2, 1}));
    moves.push_back(vector<int>({2, -1}));
    moves.push_back(vector<int>({-2, 1}));
    moves.push_back(vector<int>({-2, -1}));
    moves.push_back(vector<int>({1, 2}));
    moves.push_back(vector<int>({-1, 2}));
    moves.push_back(vector<int>({1, -2}));
    moves.push_back(vector<int>({-1, -2}));
  }
  vector<vector<int>> possiblePaths(vector<int> path) {
    vector<vector<int>> res;
    for (int i = 0; i < moves.size(); i++) {
      if (path[0] + moves[i][0] > 7 || path[0] + moves[i][0] < 0)
        continue;
      if (path[1] + moves[i][1] > 7 || path[1] + moves[i][1] < 0)
        continue;
      res.push_back(
          vector<int>({path[0] + moves[i][0], path[1] + moves[i][1]}));
    }
    return res;
  }

  void recursivePaths(vector<int> current, vector<int> destination,
                      vector<vector<int>> &q, vector<vector<int>> &visited,
                      int qPointer) {
    // code here
  }

public:
  Board() { populateMoves(); }
  vector<vector<int>> getMoves() { return moves; }
  vector<vector<int>> shortestPath(vector<int> current,
                                   vector<int> destination) {
    vector<vector<int>> res;
    // q and visited is: VALUE, FROM, HEIGHT
    vector<vector<int>> q;
    vector<vector<int>> visited;
    q.push_back(current);

    vector<int> where;
    bool stop = true;
    int qPointer = 0;
    // make a method that will find all the possible paths form a position
    recursivePaths(current, destination, q, visited, qPointer);
    // move the pointer and repeatedly do it until the element one is searching
    // for is found
    //
    return res;
    // return res;;
  }
};

int main() {
  Board *board = new Board();
  vector<vector<int>> moves = board->getMoves();
  cout << "CONSTANTS: \n [ ";
  for (int i = 0; i < moves.size(); i++) {
    cout << "[";
    for (int v = 0; v < moves[i].size(); v++) {
      cout << " " << moves[i][v];
    }
    cout << " ]";
  }
  cout << " ]" << endl;
  cout << endl;

  vector<vector<int>> path =
      board->shortestPath(vector<int>({1, 1}), vector<int>({3, 3}));
  cout << "TRIALS: \n [ ";
  for (int i = 0; i < path.size(); i++) {
    cout << "[";
    for (int v = 0; v < path[i].size(); v++) {
      cout << " " << path[i][v];
    }
    cout << " ]";
  }
  cout << " ]" << endl;
  cout << endl;

  return 0;
}
