let selectValuesAndLabels = [
  { value: 'onevalue', label: 'onelabel' },
  { value: 'twovalue', label: 'twolabel' },
  { value: 'threevalue', label: 'threelabel' },
  { value: 'fourvalue', label: 'fourlabel' },
];

function createSelect(selectValuesAndLabels, selectedValue = selectValuesAndLabels[0].value) {
  let select = document.createElement('select');
  let option = document.createElement('option');
  let massOfValue = [];
  let massOfLabels = [];
  for (let curSelect in selectValuesAndLabels){
    massOfValue.push(selectValuesAndLabels[curSelect]['value']);
    massOfLabels.push(selectValuesAndLabels[curSelect]['label']);
  }
  if (massOfValue.includes(selectedValue) === false){
    selectedValue = massOfValue[0];
  }
  document.body.append(select);
  document.body.append(option);
  select.append(option);
  option.value = selectedValue;
  option.innerHTML = massOfLabels[massOfValue.indexOf(selectedValue)];
}
let selectedValue = 'twovalue';
createSelect(selectValuesAndLabels, selectedValue);
