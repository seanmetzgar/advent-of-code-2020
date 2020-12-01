const dataSet = require('./dataSet');

const main = async () => {
  let calculated = false;
  dataSet.forEach((value, index) => {
    if (calculated === false) {
      dataSet.forEach((value2, index2) => {
        if (index2 !== index) {
          if (value + value2 === 2020) {
            calculated = {
              a: value,
              b: value2,
              sum: value + value2,
              multiplied: value * value2,
            };
          }
        }
      });
    }
  });

  console.log(calculated);
};

main();
