function Sum({numbers = [1, 2, 3, 4]}) {
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    
    return (
        <h1>{sum}</h1>
    )
}

export default Sum