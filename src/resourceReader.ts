import { readFileSync } from 'fs';

export const getTextFor = (day: string): string[] => {
    console.log(__dirname)
  const file = readFileSync(`${__dirname}\\resources\\day-${day}.txt`, 'utf-8');
  return file.split('\n');
};
