import LeaderBoard from './LeaderBoard';

const CardContents = ({ nextCard, scoreboard, showCards, numHazards }) => {
    console.log('numHazards: ', numHazards);

    return showCards ? (
        <div className="container-card">{nextCard.text}</div>
    ) : (
        <LeaderBoard scoreboard={scoreboard} numHazards={numHazards} />
    );
};

export default CardContents;
