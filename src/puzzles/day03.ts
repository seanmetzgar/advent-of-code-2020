interface Slope {
  rise: number;
  run: number;
}

interface Position {
  x: number;
  y: number;
}

interface Day03 {
  puzzle1: number;
  puzzle2: number;
  impacts: number[];
}

const getTreeImpacts = (map: string[], slope: Slope, tree: string = '#'): number => {
  let currentPosition: Position = { x: 0, y: 0 };
  let maxPosition: Position = { x: (map[0].length - 1), y: (map.length - 1) };
  let impacts: number = 0;

  do {
    currentPosition = getNewPosition(currentPosition, maxPosition, slope);
    if (map[currentPosition.y].charAt(currentPosition.x) === tree) impacts++;
  } while ( currentPosition.y < maxPosition.y );

  return impacts;
};

const getNewPosition = (currentPosition: Position, max: Position, slope: Slope): Position => {
  return {
    x: newPoint(currentPosition.x, max.x, slope.run),
    y: newPoint(currentPosition.y, max.y, slope.rise, true)
  }
};

const newPoint = (current: number, max: number, delta: number, terminating: boolean = false): number => {
  let point: number = current + delta;
  return point <= max ? point : (terminating ? max : (point % max) - 1);
}

export default (dataSet: string[]): Day03 => {
  let slopes: Slope[] = [ 
    { run: 1, rise: 1 }, 
    { run: 3, rise: 1 }, 
    { run: 5, rise: 1 }, 
    { run: 7, rise: 1 }, 
    { run: 1, rise: 2 }
  ];
  let defaultSlopeIndex: number = 1;

  let impacts = slopes.map((slope: Slope) => getTreeImpacts(dataSet, slope));

  return { puzzle1: impacts[defaultSlopeIndex], puzzle2: impacts.reduce((a, b) => a * b ), impacts: impacts };
};



