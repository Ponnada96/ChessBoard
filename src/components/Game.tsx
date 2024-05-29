import { useEffect, useState } from "react"

interface GameProps {
    boardSize: number,
    steps: number
}

interface Position {
    x: number,
    y: number
}

export default function Game({ boardSize, steps }: GameProps) {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
    const [stepCount, setStepCount] = useState<number>(0);
    const [path, setPath] = useState<Position[]>([{ x: position.x, y: position.y }]);

    useEffect(() => {

        function changePosionHandler(e: KeyboardEvent) {
            console.log(stepCount, steps)
            if (stepCount >= steps) {
                alert('Steps Completed');
                return;
            }
            let newX = position.x;
            let newY = position.y;

            switch (e.key) {
                case "ArrowUp":
                    newY = Math.max(0, position.y - 1)
                    break;
                case "ArrowDown":
                    newY = Math.min(boardSize - 1, position.y + 1)
                    break;
                case "ArrowLeft":
                    newX = Math.max(0, position.x - 1)
                    break;
                case "ArrowRight":
                    newX = Math.min(boardSize - 1, position.x + 1)
                    break;
                default:
                    return;
            }
            setPosition({ x: newX, y: newY });
            setStepCount(stepCount + 1);
            setPath(prevPath => [...prevPath, { x: newX, y: newY }]);
        };


        window.addEventListener("keydown", changePosionHandler);

        return () => {
            window.removeEventListener("keydown", changePosionHandler)
        }

    }, [steps, boardSize, position, stepCount])

    return (
        <div>
            {[...Array(boardSize)].map((_, row) => (
                <div key={row} className="row" style={{ display: 'flex' }}>
                    {[...Array(boardSize)].map((_, col) => (
                        <div key={col}
                            className={`cell ${row === position.y && col === position.x ? 'active' : ''}`} />
                    ))}
                </div>
            ))}
        </div>
    )
}


