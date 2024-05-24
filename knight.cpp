#include <iostream>
#include <vector>

using namespace std;

class Knight {
private:
	vector<vector<int>> board;
	vector<vector<int>> res;
	void makeBoard(){
		for (int i = 0; i < 8; i++){
			vector<int> newVector;
			board.push_back(newVector);
		}
	}
	void placeOnBoard(vector<int> arr){
		board[arr[0]].push_back(arr[1]);
	}
	void move(vector<int> current, vector<int> goal, vector<vector<int>> &moves){
		if (current[0] > 8 || current[0] < 0 || current[1] > 8 || current[0] < 0){
			return;
		}
		bool isCurrentIn, isGoalIn;
		for (int i ; i < moves.size(); i++){
			if (current == moves[i]){
				isCurrentIn = true;
				break;
			}

		}
		if (!isCurrentIn){
			moves.push_back(current);
			return;
		}

		for (int i ; i < moves.size(); i++){
			if (goal == moves[i]){
				res = moves;
				return;
			}
		}
	}
public:
	Knight(vector<int> current, vector<int> toGo){
		makeBoard();
		placeOnBoard(current);
		vector<vector<int>> moves;
		move(current, toGo, moves);
	}
	vector<vector<int>> getBoard(){
		return board;
	}
	vector<vector<int>> getRes(){
		return res;
	}
};

int main(){
	vector<int> current = {0,1};
	vector<int> toGo = {2,1};
	Knight *knight =  new Knight(current, toGo);
	vector<vector<int>> v = knight->getRes();

	for (vector<int> i : v){
		cout << "[";
		for (int q : i){
			cout << " " << q << " ";
		}
		cout << "]" << endl;
	}

	return 0;
}
