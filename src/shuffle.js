const shuffle = () => {
    const hazards = ['Snakes', 'Spiders', 'Falling Rocks', 'Lava', 'Zombies'];

    const hazardDeckSets = hazards.map((hazard) => [
        { text: `${hazard}-1`, value: 1 },
        { text: `${hazard}-1`, value: 1 },
        { text: `${hazard}-1`, value: 1 },
    ]);

    const hazardDeck = [
        ...hazardDeckSets[0],
        ...hazardDeckSets[1],
        ...hazardDeckSets[2],
        ...hazardDeckSets[3],
        ...hazardDeckSets[4],
    ];

    const treasureDeck = [];

    for (let i = 0; i < 15; i++) {
        treasureDeck.push({ text: `Treasure-${i + 1}`, value: i + 1 });
    }

    let deckIndices = [...treasureDeck, ...hazardDeck];
    deckIndices = shuffleArray(deckIndices);
    deckIndices = shuffleArray(deckIndices); // shuffling twice

    return deckIndices;
};

/**
 * @see https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param {*} array
 * @returns array
 */
function shuffleArray(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default shuffle;
