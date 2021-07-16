function fatorial4(N) {
    let total = N
    for (let i = 1; i < N; i++) {
        total *= i
    }
    return total
}

console.log(fatorial4(6))