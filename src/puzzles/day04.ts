interface Passport {
  byr?: string; // 4 digits, 1920-2002
  iyr?: string; // 4 digits, 2010-2020
  eyr?: string; // 4 digits, 2020-2030
  hgt?: string; // [number][cm|in] (cm: 150-193, in: 59-76)
  hcl?: string; // hex color
  ecl?: string; // (amb|blu|brn|gry|grn|hzl|oth)
  pid?: string; // 9 digits, w/ leading 0s
  cid?: string; // not required
}

interface Day04 {
  haveRequired: number;
  validated: number;
}

const cleanData = (data: string): Passport[] => {
  data = data.replace(/\n{2,}/g, ',');
  data = data.replace(/\n{1,1}/g, ' ');
  let exploded: Array<any> = data.split(',');
  let passports: Passport[] = exploded.map((values: string) => {
    let passport: Passport = {};
    let splitValues: string[] = values.split(' ');
    splitValues.forEach((splitValue: string) => {
      let tempKeyValue: string[] = splitValue.split(":");
      if (tempKeyValue.length === 2) {
        Object.defineProperty(passport, tempKeyValue[0], { value: tempKeyValue[1] });
      }
    });
    return passport;
  });

  return passports;
}

const checkRequired =(passport: Passport, required: string[] = []): boolean => {
  let rVal = true;

  required.forEach((check: string) => {
    if (!(check in passport)) {
      rVal = false;
    }
  });

  return rVal;
};

const checkPID = (hex: string): boolean => {
  return (hex.match(/^([\d]{9,9})$/)) ? true : false;
}

const checkEyeColor = (hex: string): boolean => {
  return (hex.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)) ? true : false;
}

const checkHexColor = (hex: string): boolean => {
  return (hex.match(/^(#[a-f\d]{6,6})$/)) ? true : false;
}

const checkHeight = (hgt: string): boolean => {
  let hgtExploded = hgt.match(/^([\d]{1,}?)(in|cm?)$/);
  let rVal: boolean = false;

  if (hgtExploded !== null) {
    if (hgtExploded[2] === 'cm' && parseInt(hgtExploded[1]) >= 150 && parseInt(hgtExploded[1]) <= 193) rVal = true;
    if (hgtExploded[2] === 'in' && parseInt(hgtExploded[1]) >= 59 && parseInt(hgtExploded[1]) <= 76) rVal = true;
  }

  return rVal;
}

const checkFormat = (passport: Passport) => {
  let rVal = true;

  let byr: number = parseInt(passport.byr || "");
  let iyr: number = parseInt(passport.iyr || "");
  let eyr: number = parseInt(passport.eyr || "");
  let hgt: string = passport.hgt || "";
  let hcl: string = passport.hcl || "";
  let ecl: string = passport.ecl || "";
  let pid: string = passport.pid || "";

  if (!(Number.isInteger(byr) && byr >= 1920 && byr <= 2020)) rVal = false;
  if (!(Number.isInteger(iyr) && iyr >= 2010 && iyr <= 2020)) rVal = false;
  if (!(Number.isInteger(eyr) && eyr >= 2020 && eyr <= 2030)) rVal = false;
  if (!checkHeight(hgt)) rVal = false;
  if (!checkHexColor(hcl)) rVal = false;
  if (!checkEyeColor(ecl)) rVal = false;
  if (!checkPID(pid)) rVal = false;

  return rVal;
}

export default (dataSet: string): Day04 => {
  let passports: Passport[] = cleanData(dataSet);
  let required: string[] = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  let haveRequired: number = 0;
  let validated: number = 0;

  passports.forEach(passport => {
    if (checkRequired(passport, required)) {
      haveRequired++;
      if (checkFormat(passport)) validated++;
    }
  });

  return { haveRequired: haveRequired, validated: validated };
};
