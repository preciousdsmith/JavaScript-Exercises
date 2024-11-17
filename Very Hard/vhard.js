//Create the Person constructor
class Person {




    constructor (name, job, age){
        this.name = name; // The name of the person
        this.job = job; // The job of the person
        this.age = age; // The age of the person
    }
    exercise() {
        console.log("Running is fun! - said no one ever" )
    }
    
    fetchJob () {
        console.log(`${this.name} is a ${this.job}`);
    }
}


class Programmer extends Person {

    language = []; // Holds the list of programming languages the programmer knows
    busy; // Indicates whether the programmer is busy with tasks


    constructor(name, job, age, langauges){
        super(name, job, age);
        this.language.push(...langauges);
        this.busy = true;
    }

    completeTask() {
        this.busy = false; // Sets the 'busy' status to false when a task is completed
    }


    acceptNewTask() { // Sets the 'busy' status to true when a new task is accepted
        this.busy = true; 
    }
    // Method to offer a new task and check if the programmer is busy
    offerNewTask () {
        if(this.busy === true) {
            console.log(`${this.name} can't accept any new task right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`)
        }
        }
    

    learnLanguage(language) {
        this.language.push(language); //this adds the language
    }


   //list all the languages the programmer knows
    listLanguage() {
        return this.language; //returns the array of languages
    }
}

//the outputs and arrays
const person1 = new Person("Brad", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());

console.log(person1);

console.log(c1);
console.log(c2);
console.log(c3);

person1.exercise();
person1.fetchJob();
