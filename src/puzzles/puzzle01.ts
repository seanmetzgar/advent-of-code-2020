export default (dataSet: Array<number>) => {
  let calculated = {};

  dataSet.forEach((value: number, index: number) => {
    if (Object.entries(calculated).length === 0) {
      dataSet.forEach((value2: number, index2: number) => {
        if (index2 !== index) {
          if (value + value2 === 2020) {
            calculated = {
              a: value,
              b: value2,
              sum: value + value2,
              multiplied: value * value2,
            };

            return;
          }
        }
      });
    }
  });

  return calculated;
};
