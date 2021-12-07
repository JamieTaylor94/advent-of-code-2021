import { getTextForDay } from '../resourceReader';

const report = getTextForDay('three')
  .map((line) => line.replace(/(\r\n|\n|\r)/gm, ''))
  .filter((l) => l);

describe('Day three - Binary Diagnostic!', (): void => {
  it('Part One ', (): void => {
    let gamma: string = '';
    let epsilon: string = '';

    const rowLength = report[0].length;
    const columnLength = report.length;

    for (var i = 0; i < rowLength; i++) {
      let numberOfZeroBits = 0;
      let numberOfOneBits = 0;

      for (var j = 0; j < columnLength; j++) {
        const position = parseInt(report[j][i]);
        position === 0 ? numberOfZeroBits++ : numberOfOneBits++;
      }

      numberOfZeroBits > numberOfOneBits
        ? ((gamma += '1'), (epsilon += '0'))
        : ((gamma += '0'), (epsilon += '1'));
    }

    const powerConsumption = parseInt(gamma, 2) * parseInt(epsilon, 2);

    expect(powerConsumption).toBe(1092896);
  });

  it('Part Two', (): void => {
    const oxygen = getRating(report, 1);
    const co2 = getRating(report, 0);

    let oxygenRating = parseInt(oxygen[0], 2);
    let co2Rating = parseInt(co2[0], 2);

    let lifeSupportRating = oxygenRating * co2Rating;

    expect(lifeSupportRating).toBe(4672151);
  });
});

function getRating(collection: string[], bitToFilter: number): string[] {
  let index = 0;

  while (collection.length > 1) {
    let numberOfZeroBits = 0;
    let numberOfOneBits = 0;

    for (var j = 0; j < collection.length; j++) {
      const position = parseInt(collection[j][index]);
      position === 0 ? numberOfZeroBits++ : numberOfOneBits++;
    }

    if (numberOfOneBits >= numberOfZeroBits) {
      collection = collection.filter((x) => parseInt(x[index]) === bitToFilter);
      index++;
    } else {
      let oppositeBit = bitToFilter === 1 ? 0 : 1;
      collection = collection.filter((x) => parseInt(x[index]) === oppositeBit);
      index++;
    }
  }
  return collection;
}
