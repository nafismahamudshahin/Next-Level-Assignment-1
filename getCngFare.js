//Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare += (distance - 2) * 15;
    }

    const waitingCharge = waitingMinutes * 2;
    let total = fare + waitingCharge;

    if (isNight) {
        total = total * 1.2;
    }

    return total;
}