//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) return "Won";
    if (ballsLeft <= 0) return "Lost";

    const requiredRate = (runsNeeded / ballsLeft) * 6;
    const verdict =
        requiredRate <= 6
            ? "Comfortable"
            : requiredRate <= 12
                ? "Tough"
                : "Almost Impossible";

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};