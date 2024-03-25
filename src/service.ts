export function getRange(begin: number[], end: number[]) {
  const diffX = begin[0] - end[0];
  const diffY = begin[1] - end[1];
  return Math.sqrt(diffX * diffX + diffY * diffY);
}
  
export function getRoadLength(coordinates: number[][]) {
  return coordinates?.reduce((acc, cur, index, array) => index === 0 ? 0 : acc + getRange(cur, array[index - 1]), 0);
}

export function getCoordinatesBetweenPoints(begin: number[], end: number[], rangeFromEnd: number): [number, number] {
  const range = getRange(begin, end);
  if (range === 0) {
    return begin as [number, number];
  }
  const coef = Math.abs(rangeFromEnd / range);
  const diffX = begin[0] - end[0];
  const diffY = begin[1] - end[1];
  const xCoordinate = end[0] + coef * diffX;
  const yCoordinate = end[1] + coef * diffY;
  
  return [xCoordinate, yCoordinate];
}
  
export function getRoadCenter(coordinates: number[][]): [number, number] | Boolean {
  if (!coordinates?.length) {
    return false;
  }

  const roadLength = getRoadLength(coordinates);
  
  let i = 1;
  let centerLength = roadLength / 2;
  while (centerLength >= 0 && i < coordinates.length) {
    centerLength -= getRange(coordinates[i - 1], coordinates[i]);
    i++;
  }
  
  return getCoordinatesBetweenPoints(coordinates[i - 2], coordinates[i - 1], centerLength);
}