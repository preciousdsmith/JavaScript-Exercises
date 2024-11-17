function exercise(squatting) {
    let exercise = squatting;

    return function() {
    console.log(`Today's exercise: ${exercise}`);
    }
}
const myExercise = exercise("squatting");
myExercise();