let persons = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' },
];

function FindPerson(persons, key, needName) {
  for (let personIndex in persons) {
    let curPerson = (persons[personIndex][key]);
    if (curPerson === needName) {
      let foundedPerson = Object.assign(persons[personIndex]);
    }
  }
}

let needName;
FindPerson(persons, 'name', needName);

export default FindPerson;
