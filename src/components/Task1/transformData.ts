export const dataEntry: DataEntry[] = [
  [
    ['id', 1],
    ['name', 'Ivan'],
    ['age', 23],
  ],
  [
    ['id', 2],
    ['name', 'Marina'],
    ['age', 30],
  ],
  [
    ['id', 3],
    ['name', 'Anna'],
    ['age', 28],
  ],
  [
    ['id', 4],
    ['name', 'Ivan'],
    ['age', 23],
  ],
  [
    ['id', 5],
    ['name', 'Marina'],
    ['age', 30],
  ],
  [
    ['id', 6],
    ['name', 'Anna'],
    ['age', 28],
  ],
  [
    ['id', 7],
    ['name', 'Ivan'],
    ['age', 23],
  ],
  [
    ['id', 8],
    ['name', 'Marina'],
    ['age', 30],
  ],
  [
    ['id', 9],
    ['name', 'Anna'],
    ['age', 28],
  ],
];

// Example Output
// [
//   { label: 'Ivan, 23', value: 1 },
//   { label: 'Marina, 30', value: 2 },
//   { label: 'Anna, 28', value: 3 },
// ];
type DataEntry = [string, string | number][];
export function transformData(data: DataEntry[]) {
  return data.map((elem: any, i: number) => {
    return {
      label: `${elem[1][1]}, ${elem[2][1]}`,
      value: elem[0][1],
    };
  });
}
