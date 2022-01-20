import LeaderBoard from './LeaderBoard';
import CardContents from './CardContents';

const Cards = ({ showCards, nextCard, score, handleSubmit, scoreboard, numHazards }) => {
    return (
        <>
            <div className="container-short">
                <span style={{ paddingRight: '20px' }}>Your Score: {score}</span>
                <span style={{ paddingLeft: '20px' }}>
                    <form onSubmit={handleSubmit}>
                        Your Name: <input type="text" name="playerName" defaultValue={'Joey'} size="10" />
                        <input type="submit" value="Save Game" style={{ margingLeft: '10px' }} onClick={handleSubmit} />
                    </form>
                </span>
            </div>
            <CardContents nextCard={nextCard} showCards={showCards} scoreboard={scoreboard} numHazards={numHazards} />
        </>
    );
};

export default Cards;
