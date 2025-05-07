import React, { useState } from "react";
import "./Chessboard.css";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

const Chessboard: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (coord: string) => {
    console.log(coord);
    setSelected(coord);
  };

  return (
    <div className="board-container">
      <h1 className="board-title">Andrea's chess board</h1>
      <div className="chessboard">
        {ranks.map((rank) =>
          files.map((file, i) => {
            const coord = `${file}${rank}`;
            const isLight = (i + ranks.indexOf(rank)) % 2 === 0;
            const isSelected = selected === coord;

            return (
              <div
                key={coord}
                className={`square ${isLight ? "light" : "dark"} ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => handleClick(coord)}
              >
                {coord}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Chessboard;
