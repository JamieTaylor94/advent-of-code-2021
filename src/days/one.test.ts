import { getTextFor } from '../resourceReader';

const numbers = getTextFor('one').map(Number);

describe('Day one sonar sweep', (): void => {
  it('Puzzle one - count number of times the depth increases', (): void => {
    const result = numbers.filter((depth, i) => {
      return numbers[i - 1] < depth ? 1 : 0;
    });

    expect(result.length).toBe(1316);
  });

  it('Puzzle two -three measurement sliding window', (): void => {
    const result = numbers.filter((depth, i) => {
      const nextDepth = numbers[i + 1];
      const twoDepthsLater = numbers[i + 2];
      const threeDepthsLater = numbers[i + 3];

      const windowA = depth + nextDepth + twoDepthsLater;
      const windowb = nextDepth + twoDepthsLater + threeDepthsLater;
      return windowA < windowb ? 1 : 0;
    });

    expect(result.length).toBe(1344);
  });
});
