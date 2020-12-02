interface Password {
  min: number;
  max: number;
  char: string;
  password: string;
  valid_1?: boolean | null;
  valid_2?: boolean | null;
}

const checkPassword_1 = (obj: Password) => {
  const length: number = (obj.password.match(new RegExp(`${obj.char}`, 'g')) || []).length || 0;
  obj.valid_1 = (length >= obj.min && length <= obj.max);

  return obj;
};

const checkPassword_2 = (obj: Password) => {
  obj.valid_2 = ((obj.password.charAt(obj.min - 1) === obj.char || obj.password.charAt(obj.max - 1) === obj.char) 
    && !(obj.password.charAt(obj.min - 1) === obj.char && obj.password.charAt(obj.max - 1) === obj.char))

  return obj;
};

export default (dataSet: string[]) => {
  let valid_1: number = 0;
  let valid_2: number = 0;
  let expandedDataSet = dataSet.map((item: string) => {
    const regex = /^([0-9]*?)-([0-9]*?)\s(.?):\s(.*?)$/;
    let exploded: Password | null = null;
    let found = item.match(regex);
    
    if(found !== null) {
      exploded = {
        min: parseInt(found[1]),
        max: parseInt(found[2]),
        char: found[3],
        password: found[4],
        valid_1: null,
        valid_2: null
      };

      exploded = checkPassword_1(exploded);
      exploded = checkPassword_2(exploded);

      if (exploded.valid_1) valid_1++
      if (exploded.valid_2) valid_2++
    }
    
    return exploded;
  });

  return { valid_1: valid_1, valid_2: valid_2, passwords: expandedDataSet };
};
