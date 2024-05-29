import { useState } from "react"
import Game from "./Game";

export default function ChessBoard() {
    const [boardSize, setBoardSize] = useState<number>(0);
    const [steps, setSteps] = useState<number>(0);
    const [isGameStarted, setGameStarted] = useState<boolean>(false);

    function createChessBoardHandler() {
        if (boardSize > 0 && steps > 0) {
            setGameStarted(true)
        }
        else {
            alert('Please enter valid board size and steps')
        }
    }

    return (
        <div style={{ height: '100%', width: '100%' }}>
            {isGameStarted ? (
                <>
                    <div>
                        <span>Chess Board Size (nxn)</span>
                        <input type="number"
                            onChange={(e) => setBoardSize(Number(e.target.value))}
                            value={boardSize} />
                    </div>
                    <br />
                    <div>
                        <span>Number of available steps (nxn)</span>
                        <input type="number"
                            onChange={(e) => setSteps(Number(e.target.value))}
                            value={steps} />
                    </div>
                    <br />
                    <div>
                        <button style={{ width: '40%' }}
                            onClick={createChessBoardHandler}>
                            Ok
                        </button>
                    </div>
                </>
            ) : (
               <Game boardSize={6} steps={6}/>
            )}
        </div>

    );
}
