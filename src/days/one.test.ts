import { getTextForDay } from '../resourceReader';

const depthArray = getTextForDay('one').map(Number);

describe('Day one sonar sweep', (): void => {
  it('Puzzle one - count number of times the depth increases', (): void => {
    const depthIncreaseCount = depthArray.filter((depth, i) => {
      return depthArray[i - 1] < depth ? 1 : 0;
    }).length;

    expect(depthIncreaseCount).toBe(1316);
  });

  it('Puzzle two -three measurement sliding window', (): void => {
    const windowDepthIncreaseCount = depthArray.filter((depth, i) => {
      const nextDepth = depthArray[i + 1];
      const twoDepthsLater = depthArray[i + 2];
      const threeDepthsLater = depthArray[i + 3];

      const windowA = depth + nextDepth + twoDepthsLater;
      const windowb = nextDepth + twoDepthsLater + threeDepthsLater;
      return windowA < windowb ? 1 : 0;
    }).length;

    expect(windowDepthIncreaseCount).toBe(1344);
  });
});
