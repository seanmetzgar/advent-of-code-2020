const dataSet = require('../puzzle1-dataSet');

const puzzle02 = async () => {
  let calculated = false;
  dataSet.forEach((value, index) => {
    if (calculated === false) {
      dataSet.forEach((value2, index2) => {
        if (calculated === false && index2 !== index) {
          dataSet.forEach((value3, index3) => {
            if (index3 !== index2 && index3 !== index) {
              if (value + value2 + value3 === 2020) {
                calculated = {
                  a: value,
                  b: value2,
                  c: value3,
                  sum: value + value2 + value3,
                  multiplied: value * value2 * value3,
                };
              }
            }
          });
        }
      });
    }
  });

  console.log(calculated);
};

puzzle02();
