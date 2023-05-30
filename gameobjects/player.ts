import {Direction, tileToThe, Point, opposite} from "./direction"
import {Board} from "./board"

type Player = {
	pos: Point;
	x: number;
	y: number;
	id: any;
	facing: Direction;
}

function moveForward(player: Player, board: Board, distance: number = 1): Board{
	if(board[player.pos.y][player.pos.x].walls?.includes(player.facing)){
		return
	}
	const futurePoint: Point = tileToThe(player.facing, player.pos);

	if(board[futurePoint.y][futurePoint.x].walls?.includes(opposite(player.facing))){
		return
	}
	player.pos = futurePoint;
}

export {Player}
