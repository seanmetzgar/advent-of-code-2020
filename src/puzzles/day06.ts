interface Day06 {
  compresssedData: string;
  yesSum: number;
}

const cleanData = (data: string): string[] => data.replace(/\n{2,}/g, ',').replace(/\n{1,1}/g, '').split(',');
const eliminateDuplicates = (string: string): string => string.split('')
  .filter((item, pos, self) => self.indexOf(item) === pos)
  .join('');
const getYesSum = (data: string[]): number => {
  let rVal = 0;
  data.forEach(string => {
    rVal += string.length;
  });
  return rVal;
}
const getGroupYesSum = (data: string): number => {
  let splitData: string[] = data.replace(/\n{2,}/g, ',').split(',');
  let rVal: number = 0;

  splitData.forEach((value: string) => {
    let newValue: string[] = value.split(/\n/);
    newValue[0] = eliminateDuplicates(newValue[0]);
    if (newValue.length > 1) {
      let splits = newValue[0].split('');
      splits.forEach((char) => {
        let inAll: boolean = true;
        for (let i: number = 1; i < newValue.length; i++) {
          inAll = newValue[i].includes(char) ? inAll : false;
        }
        rVal += inAll ? 1 : 0;
      });
    } else {
      rVal += newValue[0].length;
    }
  });

  return rVal;
}

export default (dataSet: string) => {
  let cleanedData: string[] = cleanData(dataSet);
  let compreessedData: string[] = cleanedData.map(item => eliminateDuplicates(item));
  let yesSum: number = getYesSum(compreessedData);
  let groupYesSum: number = getGroupYesSum(dataSet);

  return {
    compresssedData: compreessedData,
    yesSum: yesSum,
    groupYesSum: groupYesSum
  }
}
