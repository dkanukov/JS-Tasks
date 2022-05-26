const defaultListStudents = [
    {
        name: "Павел",
        surname: "Блинов",
        secondName: "Павлович",
        dateOfBirthday: new Date(1990, 7, 1),
        studyYear: new Date(2010, 9, 12),
        faculty: "Политология"
    },
    {
        name: "Дмитрий",
        surname: "Кузнецов",
        secondName: "Денисович",
        dateOfBirthday: new Date(1995, 1, 11),
        studyYear: new Date(2020, 9, 28),
        faculty: "Прикладная математика"
    },
    {
        name: "Никита",
        surname: "Гетсман",
        secondName: "",
        dateOfBirthday: new Date(2002, 2, 1),
        studyYear: new Date(2020, 9, 1),
        faculty: "Политология"
    }
];
const table = document.getElementById("table");

function getStudentAge(date1) {
    const date2 = new Date();
    let year1 = date1.getFullYear();
    let year2 = date2.getFullYear();
    let month1 = date1.getMonth();
    let month2 = date2.getMonth();
    let day1 = date1.getDate();
    let day2 = date2.getDate();
    let countYear = year2 - year1;
    if (month2 < month1 || (month2 == month1 && day2 < day1)) {
        countYear--;
    }
    return countYear;
}

function getStudyYears(studentDate){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currenMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const studentYear = studentDate.getFullYear();
    const studentMonth = studentDate.getMonth();
    const studentDay = studentDate.getDate();
    const endStudyYear = studentYear + 4;
    let countYear = currentYear - studentYear;
    if (countYear > 4) {
        return (studentYear + "-" + endStudyYear + " " + "Закончил")
    } else if (studentMonth > currenMonth) {
        return (studentYear + "-" + endStudyYear + " " + "(" + countYear + "курс" + ")");
    } else if (studentMonth == currenMonth && studentDay < currentDay) {
        return (studentYear + "-" + endStudyYear + " " + "(" + countYear-- + "курс" + ")");
    }
    return (studentYear + "-" + endStudyYear + " " + "(" + countYear + "курс" + ")");
}

(function createDefaultTable() {
    for (let i = 0; i < defaultListStudents.length; i++) {
        const student = defaultListStudents[i];
        const row = table.insertRow(1);
        row.insertCell(0).innerText = student.name + " " + student.surname + " " + student.secondName;
        row.insertCell(1).innerText = student.faculty;
        row.insertCell(2).innerText = getStudentAge(student.dateOfBirthday);
        row.insertCell(3).innerText = getStudyYears(student.studyYear);
    }
})();