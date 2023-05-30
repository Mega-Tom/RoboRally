import {Direction} from "./direction";


type Tile = {
	walls?: Direction[];
	conveyer?: {from: Direction, to: Direction, fast?: boolean};
	pit?:boolean;

};

export type Board = Tile[][]

function createTestBoard(): Board {
	let board: Board = [];
	for(let i=0;i<10;i++){
		board.push([]);
		for(let j=0;j<10;j++){
			board[i].push({});
		}
	}
	return board;
}
