function Student(name, surname, birthYear, scores) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthYear;

    this.scores = {};

    for (let score in scores) {
        this.scores[score] = scores[score];
    }

    this.attendance = new Array(25).fill(null);
    Object.seal(this.attendance);
}

Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.birthDate;
    console.log(`Age: ${age}`);
    return age;
};

Student.prototype.getAverageScore = function () {
    const scores = Object.values(this.scores);
    const sum = scores.reduce((acc, score) => acc + score, 0);
    const averageScore = sum / scores.length;
    console.log(`Average Score: ${averageScore}`);
    return averageScore;
};

Student.prototype.getLastAttendanceDay = function () {
    const dayIndex = this.attendance.findIndex((day) => day === null);
    return dayIndex;
};

Student.prototype.resetAttendance = function () {
    this.attendance.fill(null);
};

Student.prototype.present = function () {
    const dayIndex = this.getLastAttendanceDay();
    if (dayIndex !== -1) {
        this.attendance[dayIndex] = true;
    } else {
        console.log("All days are already marked");
    }
};

Student.prototype.absent = function () {
    const dayIndex = this.getLastAttendanceDay();
    if (dayIndex !== -1) {
        this.attendance[dayIndex] = false;
    } else {
        console.log("All days are already marked");
    }
};

Student.prototype.getAverageAttendance = function () {
    const presentDays = this.attendance.filter((day) => day === true).length;
    const absentDays = this.attendance.filter((day) => day === false).length;
    const averageAttendance = presentDays / (presentDays + absentDays);
    let result = 0;

    if (isNaN(averageAttendance)) {
        result = 0;
    } else if (averageAttendance === 0) {
        result = 0.00001;
    } else {
        result = averageAttendance;
    }
    console.log(`Average Attendance: ${result}`);
    return result;
};

Student.prototype.summary = function () {
    const averageAttendance = this.getAverageAttendance();
    const averageScore = this.getAverageScore();
    if (averageAttendance > 0 && averageScore > 0) {
        if (averageAttendance > 0.9 && averageScore > 90) {
            return "Good";
        } else if (averageAttendance > 0.9 || averageScore > 90) {
            return "Good, but can do better";
        } else {
            return "Bad";
        }
    } else {
        return "No data available";
    }
};

let students = [
    {
        name: "John",
        surname: "Doe",
        birthYear: 2000,
        scores: { math: 90, english: 85, history: 100 },
    },
    {
        name: "Jane",
        surname: "Smith",
        birthYear: 2001,
        scores: { math: 95, english: 90, history: 85 },
    },
    {
        name: "Bob",
        surname: "Johnson",
        birthYear: 1999,
        scores: { math: 80, english: 75, history: 70 },
    },
];

let student1 = new Student(
    students[0].name,
    students[0].surname,
    students[0].birthYear,
    students[0].scores
);
let student2 = new Student(
    students[1].name,
    students[1].surname,
    students[1].birthYear,
    students[1].scores
);
let student3 = new Student(
    students[2].name,
    students[2].surname,
    students[2].birthYear,
    students[2].scores
);

student1.present();
student1.present();


student2.absent();
student2.absent();
student2.absent();

student3.present();
student3.absent();

console.log(student1.getAge());
console.log(student1.getAverageScore());
console.log(student1.summary());
