let selectValuesAndLabels = [
  { value: 'onevalue', label: 'onelabel' },
  { value: 'twovalue', label: 'twolabel' },
  { value: 'threevalue', label: 'threelabel' },
  { value: 'fourvalue', label: 'fourlabel' },
];

function createSelect(selectValuesAndLabels, selectedValue = selectValuesAndLabels[0].value) {
  let select = document.createElement('select');
  document.body.append(select);
  let massOfValues = [];
  for (let curSelect in selectValuesAndLabels){
    massOfValues.push(selectValuesAndLabels[curSelect]['value'])
    let option = document.createElement('option');
    select.append(option);
    option.value = selectValuesAndLabels[curSelect]['value'];
    option.innerHTML = (selectValuesAndLabels[curSelect]['label']);
    if (option.value === selectedValue){
      console.log(option);
      select.value = selectedValue;
    } else if (!massOfValues.includes(selectedValue)){
      option.value = selectValuesAndLabels[0]['value'];
      option.innerHTML = selectValuesAndLabels[0]['label'];
    }
  }
  console.log(massOfValues)
  return select;
}
let selectedValue = 'zxc';
createSelect(selectValuesAndLabels, selectedValue);
