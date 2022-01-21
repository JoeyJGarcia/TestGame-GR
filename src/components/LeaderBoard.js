const LeaderBoard = ({ scoreboard, numHazards }) => {
    let scores = scoreboard ? scoreboard.length : 0;

    let topTen;

    if (scoreboard && scoreboard.length > 0) {
        topTen = [...JSON.parse(JSON.stringify(scoreboard))];
    }

    return (
        <span className="leaderboard">
            <h3>Leaderboard</h3>
            <ul style={{ fontSize: 'smaller' }}>
                {scores &&
                    topTen.map((score, idx) => {
                        return (
                            <li key={idx} style={{ listStyleType: 'none' }}>
                                {score.name}: {score.score}
                            </li>
                        );
                    })}
            </ul>
        </span>
    );
};

export default LeaderBoard;
