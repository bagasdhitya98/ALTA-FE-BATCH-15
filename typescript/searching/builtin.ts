function builtInSearch(arr: Array<number>, target: number): number{
    const result: number = arr.indexOf(target)
    return result
}

const rand: number[] = [11, 45, 80, 10, 22, 47, 65]
console.log(builtInSearch(rand, 47))
console.log(builtInSearch(rand, 7))