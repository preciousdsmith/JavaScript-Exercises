function createPatient() { //a closure is function that returns another function
    let PII = {
        name: "Precious",
        SSN: "222-444-5566"
    }

    return {
        getName: function () {
            return PII.name
        }
    }
}

const patient2 = createPatient();
console.log(patient2.getName()); // Precious is the patient
console.log(patient2.name); 