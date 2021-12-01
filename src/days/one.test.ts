import { getTextForDay } from '../resourceReader';

const measurements = getTextForDay('one').map(Number);

describe('Day one sonar sweep', (): void => {
  it('Puzzle one - count number of times the currentDepth increases', (): void => {
    const totalDepthIncrements = measurements.filter((currentDepth, i) => {
      const previousDepth = measurements[i - 1];
      const depthHasIncreased = previousDepth < currentDepth;
      return depthHasIncreased;
    }).length;

    expect(totalDepthIncrements).toBe(1316);
  });

  it('Puzzle two - three measurement sliding window', (): void => {
    const totalDepthIncrements = measurements.filter((currentDepth, i) => {
        const nextDepth = measurements[i + 1];
        const twoDepthsLater = measurements[i + 2];
        const threeDepthsLater = measurements[i + 3];

        const currentSlidingWindow = currentDepth + nextDepth + twoDepthsLater;
        const nextSlidingWindow = nextDepth + twoDepthsLater + threeDepthsLater;

        const depthHasIncreased = currentSlidingWindow < nextSlidingWindow;
        return depthHasIncreased;
      }
    ).length;

    expect(totalDepthIncrements).toBe(1344);
  });
});
