let selectValuesAndLabels = [
  { value: 'onevalue', label: 'onelabel' },
  { value: 'twovalue', label: 'twolabel' },
  { value: 'threevalue', label: 'threelabel' },
  { value: 'fourvalue', label: 'fourlabel' },
];

function createSelect(selectValuesAndLabels, selectedValue = selectValuesAndLabels[0].value) {
  let select = document.createElement('select');
  document.body.append(select);
  for (let curSelect of selectValuesAndLabels){
    let option = document.createElement('option');
    select.append(option);
    option.value = curSelect['value'];
    option.innerHTML = curSelect['label'];
    if (selectedValue === curSelect['value']){
      option.selected = true;
    }
  }

  return select;
}
let selectedValue = 'twovalue';
createSelect(selectValuesAndLabels, selectedValue);
