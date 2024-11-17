
function cutPizzaSlices(numberOfSlices, people){
    let final = 0;
    final = numberOfSlices/people; //the total of slices and the number of people that will be in the console
    return `each person gets ${final} slices of pizza from our ${numberOfSlices} slicePizza`;
}
console.log(cutPizzaSlices(8,2));  //the total of slices and the number of people