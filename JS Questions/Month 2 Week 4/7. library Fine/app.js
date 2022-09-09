function libraryFine(d1, m1, y1, d2, m2, y2) {
    // if   (y1 == y2 && m1 == m2 && d1 == d2) {
    //     return 0;
    // } else 
    let fine = 1
    if (y1 === y2 && m1 === m2 && d1 > d2) {
        fine = 15 * (d1 - d2);
    } else if (y1 === y2 && m1 > m2) {
        fine = 500 * (m1 - m2);
    } else if (y1 > y2) {
        fine = 10000;
    } else if (y1 <= y2 || m1 <= m2 || d1 <= d2) {
        fine = 0;
    }
    return fine

}
