function createPatient() { //a closure is a function that returns another function
    let PII = {
        name: "John",
        SSN: "2123-45-6789"
    }

    return {
        getName: function () {
            return PII.name
        }
    }
}

const patient2 = createPatient();
console.log(patient2.getName()); // John is the patient
console.log(patient2.name); 