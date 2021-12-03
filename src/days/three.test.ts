import { getTextForDay } from '../resourceReader';

const report = getTextForDay('three');

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
        ? (gamma += '1', epsilon += '0')
        : (gamma += '0', epsilon += '1');
    }

    const powerConsumption = parseInt(gamma, 2) * parseInt(epsilon, 2);

    expect(powerConsumption).toBe(1092896);
  });
});
