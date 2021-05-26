let persons = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' },
];

function FindPerson(persons, key, needName) {
  let foundedPerson = [];
  for (let personIndex in persons) {
    let curPerson = (persons[personIndex][key]);
    if (curPerson === needName) {
      foundedPerson.push(persons[personIndex]);
    }
  }
  return foundedPerson;
}
let needName;
let result = FindPerson(persons, 'name', needName);
// console.log(result);
export default FindPerson;
