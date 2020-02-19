const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];


//Task #1
function getSubjects(name) {
    let subjectsArr = Object.keys(name.subjects);
    for (let i = 0; i< subjectsArr.length; i++) {
        subjectsArr[i] =(subjectsArr[i][0].toUpperCase() + subjectsArr[i].slice(1).toLowerCase().replace("_", " "));
    }
    return subjectsArr;
}
console.log(getSubjects(students[0]))



//Task #2

function getAverageMark(name) {
    let sum = 0;
    let count = 0;
    for (const i in name.subjects) {
        name.subjects[i].forEach(function(item) {
            sum+=item;
            count+=1;
        })
    }
    return (sum/count).toFixed(2);
}
console.log("Середня оцінка по студенту: " + getAverageMark(students[0]))


//Task #3
function getStudentInfo(student) {
    let info = {};
    info.name = student.name;
    info.course = student.course;
    info.averageMark = getAverageMark(student);
    return info;

}

console.log(getStudentInfo(students[1]))


//Task #4

function getStudentsNames(students) {
    let f = [];
    for(let i = 0; i < students.length; i++) {
        f.push(students[i].name);
    }
    return f.sort();
}
console.log(getStudentsNames(students))



//Task #5
function getBestStudent(obj) {
    let bestStudent = "";
    let avarageMark = 0;
    for (let i = 0; i < obj.length; i++) {
        x = getAverageMark(obj[i]);
        if (parseFloat(x) > parseFloat(avarageMark)) {
            avarageMark = x;
            bestStudent = obj[i].name;
        }
    }
    return bestStudent;
}
console.log("Найкращий студент - " + getBestStudent(students))




//Task #6

function calculateWordLetters(word) {
    let countLetter = {};
    for(let i = 0; i<word.length ; i++) {
        countLetter[word[i]] = 0;
        for(let j = 0; j < word.length ; j++) {
            if (word[i]==word[j]){
                countLetter[word[i]] += 1;
            }
        }
    }
    return countLetter;
}
console.log(calculateWordLetters("teestttt"))