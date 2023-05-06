// Length conversion
const lengthInput = document.getElementById('length-input');
const lengthFrom = document.getElementById('length-from');
const lengthTo = document.getElementById('length-to');
const lengthResult = document.getElementById('length-result');
const lengthConvertBtn = document.getElementById('length-convert-btn');

lengthConvertBtn.addEventListener('click', () => {
  const input = lengthInput.value;
  const fromUnit = lengthFrom.value;
  const toUnit = lengthTo.value;
  const result = convertLength(input, fromUnit, toUnit);
  lengthResult.innerText = `${input} ${fromUnit} = ${result} ${toUnit}`;
});

function convertLength(input, fromUnit, toUnit) {
  const units = {
    meters: 1,
    feet: 3.28084,
    inches: 39.3701,
    kilometer: 0.001,
  };
  const inputInMeters = input / units[fromUnit];
  const result = inputInMeters * units[toUnit];
  return result.toFixed(3);
}


// Weight conversion
const weightInput = document.getElementById('weight-input');
const weightFrom = document.getElementById('weight-from');
const weightTo = document.getElementById('weight-to');
const weightResult = document.getElementById('weight-result');
const weightConvertBtn = document.getElementById('weight-convert-btn');

weightConvertBtn.addEventListener('click', () => {
  const input = weightInput.value;
  const fromUnit = weightFrom.value;
  const toUnit = weightTo.value;
  const result = convertWeight(input, fromUnit, toUnit);
  weightResult.innerText = `${input} ${fromUnit} = ${result} ${toUnit}`;
});

function convertWeight(input, fromUnit, toUnit) {
  const units = {
    kilograms: 1,
    grams:1000,
    pounds: 2.20462,
    ounces: 35.274
  };
  const inputInKilograms = input / units[fromUnit];
  const result = inputInKilograms * units[toUnit];
  return result.toFixed(3);
}


// Time conversion
const timeInput = document.getElementById('time-input');
const timeFrom = document.getElementById('time-from');
const timeTo = document.getElementById('time-to');
const timeResult = document.getElementById('time-result');
const timeConvertBtn = document.getElementById('time-convert-btn');

timeConvertBtn.addEventListener('click', () => {
  const input = timeInput.value;
  const fromUnit = timeFrom.value;
  const toUnit = timeTo.value;
  const result = convertTime(input, fromUnit, toUnit);
  timeResult.innerText = `${input} ${fromUnit} = ${result} ${toUnit}`;
});

function convertTime(input, fromUnit, toUnit) {
  const units = {
    seconds: 1,
    minutes: 0.0166667,
    hours: 0.000277778
  };
  const inputInSeconds = input * units[fromUnit];
  const result = inputInSeconds / units[toUnit];
  return result.toFixed(3);
}
