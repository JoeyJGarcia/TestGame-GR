import { useState, useEffect } from 'react';
import shuffle from './shuffle';
import findTopTen from './findTopTen';
import AnswerButtons from './components/AnswerButtons';
import MessageBoard from './components/MessageBoard';
import Cards from './components/Cards';
import CardBoard from './components/CardBoard';
const deck = shuffle();

function App() {
    const [showCards, setShowCards] = useState(false);
    const [newGame, setNewGame] = useState(true);
    const [nextCard, setNextCard] = useState();
    const [score, setScore] = useState(0);
    const [treasureNames, setTreasureNames] = useState([]);
    const [numHazards, setNumHazards] = useState(0);
    const [hazardNames, setHazardNames] = useState([]);
    const [message, setMessages] = useState('Wanna Play?');
    const [scoreboard, setScoreboard] = useState();
    const [buttonColor, setButtonColor] = useState('primary');
    const [buttonText, setButtonText] = useState('Draw');

    useEffect(() => {
        if (score === 0) {
            setShowCards(false);
        } else {
            setShowCards(true);
        }

        console.log('Score: ', score);

        if (score === 0) {
            setMessages('Wanna play?');
            setButtonColor('primary');
            setButtonText('Click to Play');
        } else if (numHazards === 0) {
            setMessages('Things are looking good');
            setButtonColor('primary');
            setButtonText(':-)');
        } else if (numHazards === 1) {
            setMessages('Careful, you have one hazard already');
            setButtonColor('warning');
            setButtonText(':-|');
        } else if (numHazards >= 2) {
            let lastHazard = hazardNames[hazardNames.length - 1];
            setMessages(`Bummer, the last ${lastHazard} hazard gotcha. ba-bye.`);
            setButtonColor('error');
            setButtonText(':-(');
            setShowCards(false);
        } else {
            setMessages('Nothing to worry about ... yet');
            setButtonColor('success');
            setButtonText('Draw?');
        }
    }, [numHazards, score]);

    useEffect(() => {
        updateScoreboard();
    }, [showCards, score]);

    const getNextCard = () => {
        let card = deck.pop();
        setScore(score + card.value);
        setNextCard(card);

        if (card.text.includes('Treasure')) {
            console.log(`added ${card.text}`);
            setTreasureNames([...treasureNames, card.text]);
        } else {
            setNumHazards((numHazards) => numHazards + 1);
            setHazardNames([...hazardNames, card.text]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('submission prevented');
        const playerName = event.target.form[0].value;
        const playerScore = score;
        const currentScoreboard = getScores();
        const newId = currentScoreboard.length + 1;
        const newestScore = { name: playerName, score: playerScore, id: newId };

        await addScore(newestScore);

        updateScoreboard();
        setScore(0);
        setTreasureNames([]);
        setHazardNames([]);
        setMessages('Score Saved');
        setNewGame(true);
    };

    const addScore = async (score) => {
        const response = await fetch('http://localhost:5001/leaderboard', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(score),
        });

        const data = await response.json();

        return data;
    };

    const getScores = async () => {
        const response = await fetch('http://localhost:5001/leaderboard');
        const data = await response.json();
        console.log('all scores: ', data);
        return data;
    };

    const updateScoreboard = async () => {
        const topten = findTopTen(await getScores());

        setScoreboard(topten);
    };

    return (
        <div className="App">
            <header className="App-header"></header>
            <div className="container">
                <Cards
                    showCards={showCards}
                    nextCard={nextCard}
                    score={score}
                    handleSubmit={handleSubmit}
                    scoreboard={scoreboard}
                    numHazards={numHazards}
                />
                <div className="container-message">
                    <MessageBoard message={message} hazardNames={hazardNames} numHazards={numHazards} />
                </div>
                <div className="container-short" style={{ marginBottom: '20px' }}>
                    <AnswerButtons
                        setShowCards={setShowCards}
                        getNextCard={getNextCard}
                        newGame={newGame}
                        buttonColor={buttonColor}
                        buttonText={buttonText}
                    />
                </div>
                <CardBoard showCards={showCards} treasureNames={treasureNames} hazardNames={hazardNames} />
            </div>
        </div>
    );
}

export default App;
