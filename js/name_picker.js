(function(){
    "use strict";

//    create an array of student names
    const students = [
        'Mark',
        'Brandi',
        'Alexandra',
        'Jacob',
        'Austin',
        'Jose',
        'Peter',
        'Mario',
        'Susan',
        'Kyle',
        'V',
        'Alicia',
        'Lam',
        'Joseph',
        'Victor',
        'Aaron',
        'Nick',
        'Alli',
        'Steven'
    ];

    const completedStudents = [];

    let standbyDisplay = document.getElementById('standby');
    let completeDisplay = document.getElementById('complete');
    let randomize = document.getElementById('randomize');
    let chosenOne = document.getElementById('chosen-one');

    function displayStudents() {
        let html = "";
        students.forEach(function (student) {
            html += "<h3 class='col one-half'>" + student + "</h3>";
        });
        return html;
    }

    function displayComplete(){
        let html = "";
        completedStudents.forEach(function(student) {
            html += "<h3 class='col one-half'>" + student + "</h3>";
        });
        return html;
    }

    function randomStudent(){
        const max = students.length;
        let randomNumber = Math.floor(Math.random() * max);
        //splice modifies the original array and creates a new one;
        //imagine having a block of cheese and removing from it!
        return students.splice(randomNumber,1);
    }

    function moveStudent(){
        let upNext = randomStudent();
        completedStudents.push(upNext);
        chosenOne.innerHTML = upNext;
        completeDisplay.innerHTML = displayComplete();
        standbyDisplay.innerHTML = displayStudents();
    }

    randomize.addEventListener('click',moveStudent);
    standbyDisplay.innerHTML = displayStudents();

//    create a random number generator with a max of array length - 1

//    Put this in a function attached to an event listener


//    iterate through the array of student names
//    if the name matches then print it out to html
})();