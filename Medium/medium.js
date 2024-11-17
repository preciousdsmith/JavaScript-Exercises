
function cutPizzaSlices(numberOfSlices, people){
    let final = 0;
    final = numberOfSlices/people;
    return `each person gets ${final} slices of pizza from our ${numberOfSlices} slicePizza`;
}
console.log(cutPizzaSlices(8,2));