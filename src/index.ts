import fs from "fs";


const MatchResult = {
  HomeWin : 'H',
  AwayWin : 'A',
  Draw :'D',
};

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n')
  .map((row: string): string[] => {
    return row.split(',')
  });


let manUnitedWins = 0;

for (const match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}
console.log(manUnitedWins);

