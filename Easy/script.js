function exercise(squatting) {  //name the exercise
    let exercise = squatting; //sqautting in the exercise

    return function() {
    console.log(`Today's exercise: ${exercise}`);  //Today's exercise: squatting will be in the console
    }
}
const myExercise = exercise("squatting");
myExercise();