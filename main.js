// income inputs
const incomeSalary = document.getElementById('income-salary'),
      incomeFreelance = document.getElementById('income-freelance'),
      incomeExtra1 = document.getElementById('income-extra-1'),
      incomeExtra2 = document.getElementById('income-extra-2');

// costs input
const costsFlat = document.getElementById('costs-flat'),
      costsHouseServices = document.getElementById('costs-house-services'),
      costsTransport = document.getElementById('costs-transport'),
      costsCredit = document.getElementById('costs-credit');

// total inputs

const totalMonthInput = document.getElementById('total-month'),
      totalDayInput = document.getElementById('total-day'),
      totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

// money box (копилка)
const moneyBoxRange = document.getElementById('money-box-range'),
      accumulationInput = document.getElementById('accumulation'),
      spend = document.getElementById('spend');

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.input');
for(input of inputs) {
    input.addEventListener('input', () => {
      countingAvaliableMoney();
      calculationPrecents();
    });
}

const strToNum = str => str.value ? parseInt(str.value) : 0; // если не введено никакого значения, то возвращается 0

const countingAvaliableMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) +strToNum(incomeExtra2);
    const totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) +strToNum(costsCredit);
    
    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
}

moneyBoxRange.addEventListener('input', e => {
    const totalPrecentEl = document.getElementById('total-precents');
    totalPrecents = e.target.value;
    totalPrecentEl.innerHTML = totalPrecents;
    calculationPrecents();
});

const calculationPrecents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed(); // toFixed();   toFixed(1);округление (если в скобках вставить число, оно будет округлять до значений после точки)
    accumulationInput.value = accumulation;

    spend.value = totalMonth - accumulation;

    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
}

