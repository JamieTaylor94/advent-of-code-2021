import { getTextForDay } from '../resourceReader';

const course = getTextForDay('two');

enum Direction {
  up = 'up',
  down = 'down',
  forward = 'forward'
}

describe('Day two - Dive!', (): void => {
  it('Part One ', (): void => {
    let horizontalPostion = 0;
    let depth = 0;

    course.forEach((line) => {
      const command = parseLine(line);
      const { direction, placesToMove } = command;

      if (direction === Direction.down) {
        depth += placesToMove;
      } else if (direction === Direction.up) {
        depth -= placesToMove;
      } else if (direction === Direction.forward) {
        horizontalPostion += placesToMove;
      }
    });

    expect(horizontalPostion * depth).toBe(1989014);
  });

  it('Part two - ', (): void => {
    let horizontalPostion = 0;
    let aim = 0;
    let depth = 0;

    course.forEach((line) => {
      const command = parseLine(line);
      const { direction, placesToMove } = command;

      if (direction === Direction.down) {
        aim += placesToMove;
      } else if (direction === Direction.up) {
        aim -= placesToMove;
      } else if (direction === Direction.forward) {
        horizontalPostion += placesToMove;
        depth += aim * placesToMove;
      }
    });

    expect(horizontalPostion * depth).toBe(2006917119);
  });
});

const parseLine = (line: string): Command => {
  const parts = line.split(' ');

  return {
    direction: parts[0],
    placesToMove: parseInt(parts[1])
  } as Command;
};

interface Command {
  direction: string;
  placesToMove: number;
}
