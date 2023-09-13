import Game from './components/Game';

import React, { useState, useEffect } from 'react';

// Define the list of phrases to form
const phrasesToForm = [
  "tetris phrase ",
  "best game",
  "in the world",
];

const initialGameState = {
  score: 0,
  phrasesFormed: 0,
  currentPhrase: '',
  blocks: [],
};

function GameBoard() {
  const [gameState, setGameState] = useState(initialGameState);

  useEffect(() => {
    //  Function to generate a new block with a random word
    const generateRandomBlock = () => {
      const words = phrasesToForm.join(' ').split(' ');
      const randomWord = words[Math.floor(Math.random() * words.length)];
      return { word: randomWord, x: Math.floor(Math.random() * 8) };
    };

    // Function to handle block movement
    const moveBlocks = () => {
      // Move the blocks down
      const updatedBlocks = gameState.blocks.map((block) => ({
        ...block,
        y: block.y + 1,
      }));

      // For collisions and phrase formation
      updatedBlocks.forEach((block) => {
        if (block.y >= 18) {
          // Block has reached the bottom
          const phrase = gameState.currentPhrase + ' ' + block.word;
          if (phrasesToForm.includes(phrase)) {
            // Correct phrase formed
            const newPhrasesFormed = gameState.phrasesFormed + 1;
            const newScore = gameState.score + phrase.length * 10;
            setGameState({
              ...gameState,
              currentPhrase: '',
              phrasesFormed: newPhrasesFormed,
              score: newScore,
            });
          } else {
            // Incorrect phrase formed
            setGameState({ ...gameState, currentPhrase: '' });
          }
        }
      });

      // Remove blocks that have reached the bottom
      const filteredBlocks = updatedBlocks.filter((block) => block.y < 18);

      // Generate new blocks to replace the ones that fell
      const newBlocks = [...filteredBlocks];
      while (newBlocks.length < 5) {
        newBlocks.push(generateRandomBlock());
      }

      setGameState({ ...gameState, blocks: newBlocks });
    };

    // Start the game loop
    const gameLoop = setInterval(moveBlocks, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(gameLoop);
  }, [gameState]);

  // Handle block movement and phrase formation here

  return (
    <div className="game-board">
      {/* Render the game board and blocks here */}
      <div className="score">Score: {gameState.score}</div>
      <div className="phrases">Phrases Formed: {gameState.phrasesFormed}</div>
    </div>
  );
}

export default GameBoard;
