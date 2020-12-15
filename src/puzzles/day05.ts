interface Day05 {
  highestSeatID: number,
  missingSeatID: number | undefined,
  data: BoardingPass[]
}

interface BoardingPass {
  raw: string,
  rowBinary: string,
  rowDecimal: number,
  colBinary: string,
  colDecimal: number,
  seatID: number
}

enum PassSection {
  row = "row",
  col = "col"
}


const getBinarySection = (seatRaw: string, section: PassSection = PassSection.row) => {
  // Using the sameple FFFBBBFRRR, knowing the first 7 letters = 44, we assume F:0, B:1
  // Last 3 letters are the columm and = 5, we assume L:0, R:1
  let offset = section === PassSection.col ? 7 : 0;
  let length = section === PassSection.col ? 3 : 7;
  return seatRaw.substr(offset, length).replace(/[FfLl]/g, '0').replace(/[BbRr]/g, '1');
}
const getDecimal = (rowBinary: string) => parseInt(rowBinary, 2);
const getSeatID = (row: number, col: number) => row * 8 + col;
const getHighestSeatID = (data: BoardingPass[]) => Math.max.apply(Math, data.map(obj => obj.seatID));
const getMissingSeatID = (data: BoardingPass[]) => {
  data = data.sort((a, b) => a.seatID - b.seatID);
  
  let preceedingSeat: BoardingPass | undefined = data.find(
    (obj: BoardingPass, index: number, all: BoardingPass[]) => 
    obj.seatID + 2 === all[index + 1].seatID
  );

  return (typeof preceedingSeat !== 'undefined') ? preceedingSeat.seatID + 1 : undefined;
}

export default (dataSet: string[]): Day05 => {
  let boardingPasses: BoardingPass[] = dataSet.map((raw: string) => {
    let rowBin: string = getBinarySection(raw);
    let rowDec: number = getDecimal(rowBin);
    let colBin: string = getBinarySection(raw, PassSection.col);
    let colDec: number = getDecimal(colBin);
    let seatID: number = getSeatID(rowDec, colDec);

    return {
      raw: raw,
      rowBinary: rowBin,
      colBinary: colBin,
      rowDecimal: rowDec,
      colDecimal: colDec,
      seatID: seatID
    };
  });

  return {
    highestSeatID: getHighestSeatID(boardingPasses),
    missingSeatID: getMissingSeatID(boardingPasses),
    data: boardingPasses
  }
}
