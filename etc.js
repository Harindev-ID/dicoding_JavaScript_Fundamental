function findMax(a, b, c) {
    if (a > b && b > c) {
        return a;
    } else if (b > a && a > c) {
        return b;
    } else {
        return c;
    }
}