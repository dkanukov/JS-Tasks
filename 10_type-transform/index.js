const defaultListStudents = [
  {
    name: 'Павел',
    surname: 'Блинов',
    secondName: 'Павлович',
    dateOfBirthday: new Date(1990, 7, 1),
    studyYear: new Date(2010, 9, 12),
    faculty: 'Политология',
  },
  {
    name: 'Дмитрий',
    surname: 'Кузнецов',
    secondName: 'Денисович',
    dateOfBirthday: new Date(1995, 1, 11),
    studyYear: new Date(2020, 9, 28),
    faculty: 'Прикладная математика',
  },
  {
    name: 'Никита',
    surname: 'Гецман',
    secondName: '',
    dateOfBirthday: new Date(2002, 2, 1),
    studyYear: new Date(2020, 9, 1),
    faculty: 'Политология',
  },
];
const table = document.getElementById('table');
const addStudentBtn = document.getElementById('addStudent');
const alertModal = document.getElementById('alert');
const modal = document.getElementById('exampleModal');

function getStudentAge(date1) {
  const date2 = new Date();
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();
  const day1 = date1.getDate();
  const day2 = date2.getDate();
  let countYear = year2 - year1;
  if (month2 < month1 || (month2 === month1 && day2 < day1)) {
    countYear--;
  }
  return countYear;
}

function getStudyYears(studentDate) {
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
    return (`${studentYear}-${endStudyYear} (Закончил)`);
  }
  if (studentMonth > currenMonth) {
    return (`${studentYear}-${endStudyYear} (${countYear}курс)`);
  }
  if (studentMonth === currenMonth && studentDay < currentDay) {
    return (`${studentYear}-${endStudyYear} ${countYear--}курс)`);
  }
  return (`${studentYear}-${endStudyYear} ${countYear}курс`);
}

function addStudentToTable(student) {
  const row = table.insertRow(1);
  row.insertCell(0).innerText = `${student.name} ${student.surname} ${student.secondName}`;
  row.insertCell(1).innerText = student.faculty;
  row.insertCell(2).innerText = getStudentAge(student.dateOfBirthday).toString();
  row.insertCell(3).innerText = getStudyYears(student.studyYear);
}

function checkStudyYear(date) {
  if (date.getFullYear() >= 2000 && date.getFullYear() <= new Date().getFullYear()) {
    return true;
  }
  return false;
}

function checkBirthday(date) {
  if (date.getFullYear() >= 1900 && date.getFullYear() <= new Date().getFullYear()) {
    return true;
  }
  return false;
}

function validateStudent(student) {
  if (student.name === '' || student.surname === '' || student.secondName === '' || student.faculty === ''
  || !checkBirthday(student.dateOfBirthday) || !checkStudyYear(student.studyYear)) {
    return false;
  }
  checkStudyYear(student.studyYear);

  defaultListStudents.push(student);
  addStudentToTable(student);
  return true;
}

addStudentBtn.addEventListener('click', () => {
  const newStudent = {
    name: document.getElementById('nameInput').value.trim(),
    surname: document.getElementById('surnameInput').value.trim(),
    secondName: document.getElementById('secondNameInput').value.trim(),
    dateOfBirthday: new Date(document.getElementById('dateOfBirthdayInput').value),
    studyYear: new Date(document.getElementById('dateOfStudyInput').value),
    faculty: document.getElementById('facultyInput').value.trim(),
  };
  if (!validateStudent(newStudent)) {
    alertModal.classList.add('show');
    setTimeout(() => alertModal.classList.remove('show'), 4000);
    document.getElementById('nameInput').value = '';
    document.getElementById('surnameInput').value = '';
    document.getElementById('secondNameInput').value = '';
    document.getElementById('dateOfBirthdayInput').value = '';
    document.getElementById('dateOfStudyInput').value = '';
    document.getElementById('facultyInput').value = '';
  } else {
    alert('Студент добавлен');
  }
  modal.classList.remove('show');
  document.getElementsByClassName('modal-backdrop')[0].classList.remove('show');
});

(function createDefaultTable() {
  for (let i = 0; i < defaultListStudents.length; i++) {
    const student = defaultListStudents[i];
    addStudentToTable(student);
  }
}());
