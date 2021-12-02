import { getTextForDay } from '../resourceReader';

const course = getTextForDay('two');

interface Command {
  direction: string;
  placesToMove: number;
}

const commands = course.map((command) => {
  const parts = command.split(' ');
  return {
    direction: parts[0],
    placesToMove: parseInt(parts[1])
  } as Command;
});

describe('Day two - Dive!', (): void => {
  it('Part One ', (): void => {
    let horizontalPostion = 0;
    let depth = 0;

    commands.forEach((c) => {
      const direction = c.direction;
      const placesToMove = c.placesToMove;
      if (direction === 'down') {
        depth += placesToMove;
      } else if (direction === 'up') {
        depth -= placesToMove;
      } else if (direction === 'forward') {
        horizontalPostion += placesToMove;
      }
    });

    expect(horizontalPostion * depth).toBe(1989014);
  });

  it('Part two - ', (): void => {
    let horizontalPostion = 0;
    let aim = 0;
    let depth = 0;

    commands.forEach((c) => {
      const direction = c.direction;
      const placesToMove = c.placesToMove;

      if (direction === 'down') {
        aim += placesToMove;
      } else if (direction === 'up') {
        aim -= placesToMove;
      } else if (direction === 'forward') {
        horizontalPostion += placesToMove;
        depth += aim * placesToMove;
      }
    });

    expect(horizontalPostion * depth).toBe(2006917119);
  });
});
