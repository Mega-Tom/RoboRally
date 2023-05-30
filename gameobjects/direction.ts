enum Direction {north, east, south, west}
type Point = {
	x: number;
	y: number;
}

function opposite(direction: Direction): Direction{
	return (direction + 2) % 4
}

function right(direction: Direction): Direction{
	return (direction + 1) % 4
}

function left(direction: Direction): Direction{
	return (direction + 3) % 4
}

function tileToThe(direction: Direction, tile: Point): Point{
	if(direction === Direction.north){
		return {
			x: tile.x,
			y: tile.y - 1
		}
	}
	if(direction === Direction.east){
		return {
			x: tile.x + 1,
			y: tile.y
		}
	}
	if(direction === Direction.south){
		return {
			x: tile.x,
			y: tile.y + 1
		}
	}
	if(direction === Direction.west){
		return {
			x: tile.x - 1,
			y: tile.y
		}
	}
}

export {Direction, opposite, right, left, tileToThe, Point};
