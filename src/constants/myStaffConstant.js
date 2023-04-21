import myStaffG from '../constants/casual.json'



function processMyStaff(myStaffG) {
    
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  return myStaffG.map((item) => {
    const { Month, ...rest } = item
    return {
      Month,
      myMonth: monthNames[Month - 1],

      ...rest,
    }
  })
}

export const myStaffGG = processMyStaff(myStaffG)


 const processYearSum = (myStaffG) => {
  let sumObj = {
    Actual: 0,
    Budget: 0,
    Forecast: 0,
    MYR: 0,
  };

  myStaffG.forEach(item => {
    sumObj.Actual += isNaN(item.Actual) ? 0 : item.Actual;
    sumObj.Budget += isNaN(item.Budget) ? 0 : item.Budget;
    sumObj.Forecast += isNaN(item.Forecast) ? 0 : item.Forecast;
    sumObj.MYR += isNaN(item.MYR) ? 0 : item.MYR;
  });

  return sumObj;
};

export const myStaffSum = processYearSum(myStaffG);

function getLastNonZeroActualAndDifference(myStaffG) {
  let lastNonZeroActual = null;
  let previousActual = null;

  for (let i = myStaffG.length - 1; i >= 0; i--) {
    if (myStaffG[i].hasOwnProperty('Actual') && myStaffG[i].Actual !== 0) {
      lastNonZeroActual = myStaffG[i].Actual;
      previousActual = i > 0 && myStaffG[i - 1].hasOwnProperty('Actual') ? myStaffG[i - 1].Actual : null;
      break;
    }
  }

  if (lastNonZeroActual === null) {
    return { lastNonZeroActual: null, difference: null };
  }

  const difference = previousActual !== null ? lastNonZeroActual - previousActual : null;
  return { lastNonZeroActual, difference };
}

const result = getLastNonZeroActualAndDifference(myStaffG);
// console.log("Last non-zero Actual:", result.lastNonZeroActual);
// console.log("Difference:", result.difference);

export const lastNonZeroActualAndDifference = getLastNonZeroActualAndDifference(myStaffG);
