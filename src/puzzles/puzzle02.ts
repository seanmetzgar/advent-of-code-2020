export default (dataSet: Array<number>) => {
  let calculated = {};
  dataSet.forEach((value: number, index: number) => {
    if (Object.entries(calculated).length === 0) {
      dataSet.forEach((value2: number, index2: number) => {
        if (Object.entries(calculated).length === 0 && index2 !== index) {
          dataSet.forEach((value3: number, index3: number) => {
            if (index3 !== index2 && index3 !== index) {
              if (value + value2 + value3 === 2020) {
                calculated = {
                  a: value,
                  b: value2,
                  c: value3,
                  sum: value + value2 + value3,
                  multiplied: value * value2 * value3,
                };

                return;
              }
            }
          });
        }
      });
    }
  });

  return calculated;
};