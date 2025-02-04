import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [totalVotes, setTotalVotes] = useState(new Uint8Array(8));

  function handleNextAnecdote() {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  }

  function handleAnecdoteVote() {
    const copy = [...totalVotes];
    copy[selected] += 1;
    setTotalVotes(copy);
    console.log(copy);
  }

  function handleWinner() {
    const highestVoteTotal = Math.max(...totalVotes);
    const highestTotalIndex = totalVotes.indexOf(highestVoteTotal);
    return highestTotalIndex;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{totalVotes[selected]}</p>
      <button onClick={handleAnecdoteVote}>Vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[handleWinner()]}</p>
      <p>Has {totalVotes[handleWinner()]} votes</p>
    </div>
  );
}

export default App;
