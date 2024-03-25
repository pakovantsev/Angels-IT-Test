export function getRange(begin: number[], end: number[]) {
  const diffX = begin[0] - end[0];
  const diffY = begin[1] - end[1];
  return Math.sqrt(diffX * diffX + diffY * diffY);
}
  
export function getRoadLength(coordinates: number[][]) {
  return coordinates?.reduce((acc, cur, index, array) => index === 0 ? 0 : acc + getRange(cur, array[index - 1]), 0);
}
  
export function getRoadCenter(coordinates: number[][]): [number, number] | Boolean {
  const roadLength = getRoadLength(coordinates);
  
  let i = 1;
  let centerLength = roadLength / 2;
  while (centerLength > 0 && i < coordinates.length) {
    centerLength -= getRange(coordinates[i - 1], coordinates[i]);
    i++;
  }
  
  if (centerLength > 0 || i === 1) return false;
  i--;
  
  const coef = Math.abs(centerLength / getRange(coordinates[i - 1], coordinates[i]));
  const diffX = coordinates[i - 1][0] - coordinates[i][0];
  const diffY = coordinates[i - 1][1] - coordinates[i][1];
  const xCoordinate = coordinates[i][0] + coef * diffX;
  const yCoordinate = coordinates[i][1] + coef * diffY;
  
  return [xCoordinate, yCoordinate];
}