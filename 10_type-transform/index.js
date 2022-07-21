const listStudents = [
  {
    name: 'А',
    surname: 'А',
    secondName: 'Б',
    dateOfBirthday: new Date(1990, 7, 1),
    studyYear: new Date(2010, 9, 12),
    faculty: 'Политология',
  },
  {
    name: 'А',
    surname: 'А',
    secondName: 'А',
    dateOfBirthday: new Date(1995, 1, 11),
    studyYear: new Date(2020, 9, 28),
    faculty: 'Прикладная математика',
  },
  {
    name: 'Б',
    surname: 'Б',
    secondName: '',
    dateOfBirthday: new Date(2002, 2, 1),
    studyYear: new Date(2020, 9, 1),
    faculty: 'Политология',
  },
];
let studentToDisplay = [];
const table = document.getElementById('table');
const tableTr = document.getElementsByTagName('tr');
const addStudentBtn = document.getElementById('addStudent');
const modal = document.getElementById('exampleModal');
const resultMessage = document.getElementById('resultMessage');
const nameColumn = document.getElementById('sortByName');
const facultyColumn = document.getElementById('sortByFaculty');
const birthdayColumn = document.getElementById('sortByBirthday');
const studyYearColumn = document.getElementById('sortByStudyYears');
const nameInput = document.getElementById('nameInputFilter');
const facultyInput = document.getElementById('facultyInputFilter');
const dateInput = document.getElementById('DateStartInputFilter');
const dateInputEnd = document.getElementById('DateEndInputFilter');
let sortBy = 'desc';

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
  const row = table.insertRow(0);
  row.insertCell(0).innerText = `${student.name} ${student.surname} ${student.secondName}`;
  row.insertCell(1).innerText = student.faculty;
  row.insertCell(2).innerText = getStudentAge(student.dateOfBirthday).toString();
  row.insertCell(3).innerText = getStudyYears(student.studyYear);
}

function validateStudent(student) {
  const result = {
    isValid: true,
    message: '',
  };
  if (!student.name) {
    result.isValid = false;
    result.message += 'Не указано имя ';
  }
  if (!student.surname) {
    result.isValid = false;
    result.message += 'Не указана фамилия ';
  }
  if (!student.secondName) {
    result.isValid = false;
    result.message += 'Не указано отчество ';
  }
  if (!(student.dateOfBirthday.getFullYear() >= 1900
    && student.dateOfBirthday.getFullYear() <= new Date().getFullYear())) {
    result.isValid = false;
    result.message += 'Неверная дата рождения ';
  }
  if (!(student.studyYear.getFullYear() >= 2000
    && student.studyYear.getFullYear() <= new Date().getFullYear())) {
    result.isValid = false;
    result.message += 'Неверная дата окончания обучения ';
  }
  if (!student.faculty) {
    result.isValid = false;
    result.message += 'Не указана факультет ';
  }
  if (result.isValid) {
    listStudents.push(student);
    addStudentToTable(student);
    result.message = 'Студент добавлен!';
  }
  return result;
}

function tableSort(n) {
  if (sortBy === 'desc') {
    for (let i = 1; i < tableTr.length - 1; i++) {
      for (let j = 2; j < tableTr.length; j++) {
        if (tableTr[i].cells[n].innerText > tableTr[j].cells[n].innerText) {
          table.insertBefore(tableTr[j], tableTr[i]);
        }
      }
    }
  } else if (sortBy === 'asc') {
    for (let i = 1; i < tableTr.length - 1; i++) {
      for (let j = 2; j < tableTr.length; j++) {
        if (tableTr[i].cells[n].innerText < tableTr[j].cells[n].innerText) {
          table.insertBefore(tableTr[j], tableTr[i]);
        }
      }
    }
  }
  sortBy = sortBy === 'asc' ? 'desc' : 'asc';
}

function tableFilter() {
  const name = nameInput.value.trim().toLowerCase();
  const faculty = facultyInput.value.trim().toLowerCase();
  const dateStart = dateInput.value.trim();
  const dateEnd = dateInputEnd.value.trim();
  for (let i = 1; i < tableTr.length; i++) {
    const tdName = tableTr[i].getElementsByTagName('td')[0];
    const tdFaculty = tableTr[i].getElementsByTagName('td')[1];
    const tdDateStart = tableTr[i].getElementsByTagName('td')[3].innerText.slice(0, 4);
    const tdDateEnd = tableTr[i].getElementsByTagName('td')[3].innerText.slice(5, 9);
    if (tdName.innerText.toLowerCase().indexOf(name) === -1
      || tdFaculty.innerText.toLowerCase().indexOf(faculty) === -1
      || tdDateStart.indexOf(dateStart) === -1 || tdDateEnd.indexOf(dateEnd) === -1) {
      tableTr[i].style.display = 'none';
    } else {
      tableTr[i].style.display = '';
    }
  }
}

function updTable() {
  table.innerHTML = '';
  for (let i = 0; i < studentToDisplay.length; i++) {
    addStudentToTable(studentToDisplay[i]);
  }
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
  const result = validateStudent(newStudent);
  if (!result.isValid) {
    resultMessage.classList.remove('d-none');
    resultMessage.classList.add('d-block', 'text-danger');
    resultMessage.innerText = result.message;
    setTimeout(() => {
      resultMessage.classList.remove('d-block', 'text-danger');
      resultMessage.classList.add('d-none');
    }, 4000);
  } else {
    resultMessage.classList.remove('d-none');
    resultMessage.classList.add('d-block', 'text-success');
    resultMessage.innerText = result.message;
    setTimeout(() => {
      resultMessage.classList.remove('d-block', 'text-success');
      resultMessage.classList.add('d-none');
    }, 4000);
  }
  document.getElementById('nameInput').value = '';
  document.getElementById('surnameInput').value = '';
  document.getElementById('secondNameInput').value = '';
  document.getElementById('dateOfBirthdayInput').value = '';
  document.getElementById('dateOfStudyInput').value = '';
  document.getElementById('facultyInput').value = '';
  modal.classList.remove('show');
  document.getElementsByClassName('modal-backdrop')[0].classList.remove('show');
});

nameColumn.addEventListener('click', () => {
  tableSort(0);
});

facultyColumn.addEventListener('click', () => {
  tableSort(1);
});

birthdayColumn.addEventListener('click', () => {
  tableSort(2);
});

studyYearColumn.addEventListener('click', () => {
  tableSort(3);
});

nameInput.addEventListener('keyup', () => {
  tableFilter();
});

facultyInput.addEventListener('keyup', () => {
  tableFilter();
});

dateInput.addEventListener('keyup', () => {
  tableFilter();
});

dateInputEnd.addEventListener('keyup', () => {
  tableFilter();
});

(function createDefaultTable() {
  for (let i = 0; i < listStudents.length; i++) {
    const student = listStudents[i];
    addStudentToTable(student);
  }
}());
