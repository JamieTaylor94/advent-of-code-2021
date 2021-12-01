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

<<<<<<< HEAD
  it('Puzzle two - three measurement sliding window', (): void => {
    const windowDepthIncreaseCount = depthArray.filter((depth, i) => {
      const nextDepth = depthArray[i + 1];
      const twoDepthsLater = depthArray[i + 2];
      const threeDepthsLater = depthArray[i + 3];

      const windowA = depth + nextDepth + twoDepthsLater;
      const windowB = nextDepth + twoDepthsLater + threeDepthsLater;
      return windowA < windowB ? 1 : 0;
    }).length;
=======
  it('Puzzle two -three measurement sliding window', (): void => {
    const totalDepthIncrements = measurements.filter(
      (currentDepth, i) => {
        const nextDepth = measurements[i + 1];
        const twoDepthsLater = measurements[i + 2];
        const threeDepthsLater = measurements[i + 3];

        const currentSlidingWindow = currentDepth + nextDepth + twoDepthsLater;
        const nextSlidingWindow = nextDepth + twoDepthsLater + threeDepthsLater;

        const depthHasIncreased = currentSlidingWindow < nextSlidingWindow;
        return depthHasIncreased;
      }
    ).length;
>>>>>>> e39f7eb (Minor refactor of day one to become slightly more readable)

    expect(totalDepthIncrements).toBe(1344);
  });
});
