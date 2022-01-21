const findTopTen = (scores) => {
    const sorted = doSort(scores);

    if (sorted.length > 10) {
        sorted.length = 10;
    }
    console.log('Top ten: ', sorted);

    return sorted;
};

const doSort = (scores) => {
    let sorted = scores.sort((A, B) => {
        if (A.score > B.score) return -1;
        if (A.score < B.score) return 1;
        if (A.score === B.score) return 0;
    });

    return sorted;
};

export default findTopTen;
