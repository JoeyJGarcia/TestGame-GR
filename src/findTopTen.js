const findTopTen = (scores) => {
    scores.sort((A, B) => {
        if (A.scores > B.scores) return -1;
        if (A.scores < B.scores) return 1;
        if (A.scores == B.scores) return 0;
    });

    let sortedScores = (scores.length = 10);
    console.log('Top ten: ', sortedScores);
    return sortedScores;
};

module.exports = { findTopTen };
