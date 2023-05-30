type Constructor<T> = new (...a: any) => T;

function getElement<ElementType extends HTMLElement>(id: string, type: Constructor<ElementType>){
    const el = document.getElementById(id);
    if(!(el instanceof type))
    {
        throw new Error(id + " not found");
    }
    return el;
}

function initBoard(){
    const board = getElement("board-canvas", HTMLCanvasElement);
    const context = board.getContext("2d");
    if(context == null){
        throw new Error("Unable to read context");
    }
    board.width = 500;
    board.height = 500;
    
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);
    return {board, context};
}

function drawBoard(context: CanvasRenderingContext2D){
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            context.strokeStyle = 'white';
            context.fillStyle = 'gray';
            context.beginPath();
            context.rect(i*50 + 3, j*50 + 3, 44, 44);
            context.fill();
            context.stroke();

            context.strokeStyle = 'blue';
            context.fillStyle = 'yellow';
            context.beginPath();
            context.moveTo(i*50+25, j*50+10);
            context.lineTo(i*50+40, j*50+25);
            context.lineTo(i*50+10, j*50+25);
            context.lineTo(i*50+25, j*50+10);
            context.stroke();
            context.fill();
        }
    }
}

const {context} = initBoard();
drawBoard(context);