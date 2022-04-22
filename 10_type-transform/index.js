const studentList = [
  {
    name: 'Name_1',
    surname: 'Surname_1',
    secondName: 'Secondname_1',
    birthdayDate: new Date(2002, 6, 1),
    studyYear: new Date(2019),
    faculty: 'Faculty_1',
  },
  // {
  //   name: 'Name_2',
  //   surname: 'Surname_2',
  //   secondName: 'Secondname_2',
  //   birthdayDate: new Date(2002, 6, 1),
  //   studyYear: new Date(2019, 5, 3),
  //   faculty: 'Faculty_2',
  // },
];

function countYear(student) {
  const dateNow = Date.now();
  let date;
  date = student.birthdayDate.getDay() + student.birthdayDate.getMonth()
    + student.birthdayDate.getFullYear()

  return 'text';
}

// eslint-disable-next-line func-names
(function () {
  const table = document.getElementById('table');
  if (studentList.length) {
    // eslint-disable-next-line guard-for-in
    studentList.forEach((student) => {
      const row = table.insertRow(1);
      row.insertCell(0).innerText = `${student.surname} ${student.surname} ${student.secondName}`;
      row.insertCell(1).innerText = student.faculty;
      row.insertCell(2).innerText = countYear(student);
    });
  }
}());
