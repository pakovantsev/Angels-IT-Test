import { getRange, getRoadLength, getCoordinatesBetweenPoints, getRoadCenter } from "./service";

const ZERO_COORDINATE = [0, 0];
const TEST_COORDINATE_1 = [3, 4];
const TEST_COORDINATE_2 = [11, -2];
const TEST_COORDINATE_4 = [-3, -4];
const TEST_COORDINATE_5 = [10, 10];
const TEST_COORDINATE_6 = [10, 0];
const TEST_COORDINATE_7 = [11, 8];
const TEST_COORDINATE_8 = [16, 8];
const TEST_COORDINATE_9 = [5, 0];
const TEST_COORDINATE_10 = [6, 8];
const TEST_COORDINATE_11 = [5, 5];
const TEST_COORDINATE_12 = [5, 2.5];

const TEST_COORDINATES_1 = [ZERO_COORDINATE, TEST_COORDINATE_1, TEST_COORDINATE_2];
const TEST_COORDINATES_2 = [
  ZERO_COORDINATE,
  TEST_COORDINATE_6,
  TEST_COORDINATE_5
];
const TEST_COORDINATES_3 = [
  ZERO_COORDINATE,
  TEST_COORDINATE_1,
  TEST_COORDINATE_2,
  TEST_COORDINATE_7,
  TEST_COORDINATE_8
];

describe("getRange test", () => {
  it("function works", () => {
    expect(getRange(ZERO_COORDINATE, ZERO_COORDINATE)).toEqual(0);
  });

  it("function counts correctly", () => {
    expect(getRange(ZERO_COORDINATE, TEST_COORDINATE_1)).toEqual(5);
    expect(getRange(TEST_COORDINATE_1, TEST_COORDINATE_2)).toEqual(10);
  });
});

describe("getRoadLength test", () => {
  it("function works", () => {
    expect(getRoadLength([])).toEqual(0);
  });
  
  it("function counts correctly", () => {
    expect(getRoadLength(TEST_COORDINATES_1)).toEqual(15);
    expect(getRoadLength(TEST_COORDINATES_2)).toEqual(20);
    expect(getRoadLength(TEST_COORDINATES_3)).toEqual(30);
  });
});

describe("getCoordinatesBetweenPoints test", () => {
  it("function works", () => {
    expect(getCoordinatesBetweenPoints(ZERO_COORDINATE, ZERO_COORDINATE, 0)).toEqual(ZERO_COORDINATE);
  });
    
  it("function counts correctly with zero range", () => {
    expect(getCoordinatesBetweenPoints(ZERO_COORDINATE, TEST_COORDINATE_1, 0)).toEqual(TEST_COORDINATE_1);
  });

  it("function counts correctly with range equal to the distance between points", () => {
    expect(getCoordinatesBetweenPoints(ZERO_COORDINATE, TEST_COORDINATE_1, 5)).toEqual(ZERO_COORDINATE);
  });
  
  it("function counts correctly with range more then distance between points", () => {
    expect(getCoordinatesBetweenPoints(ZERO_COORDINATE, TEST_COORDINATE_1, 10)).toEqual(TEST_COORDINATE_4);
  });
  
  it("function counts correctly", () => {
    expect(getCoordinatesBetweenPoints(ZERO_COORDINATE, TEST_COORDINATE_6, 5)).toEqual(TEST_COORDINATE_9);
    expect(getCoordinatesBetweenPoints(ZERO_COORDINATE, TEST_COORDINATE_10, 5)).toEqual(TEST_COORDINATE_1);
  });
});

describe("getRoadCenter test", () => {
  it("function works", () => {
    expect(getRoadCenter([])).toEqual(false);
  });

  it("function counts correctly with equal points", () => {
    expect(getRoadCenter([ZERO_COORDINATE, ZERO_COORDINATE, ZERO_COORDINATE])).toEqual(ZERO_COORDINATE);
  });
  
  it("function counts correctly", () => {
    expect(getRoadCenter([ZERO_COORDINATE, TEST_COORDINATE_5, ZERO_COORDINATE])).toEqual(TEST_COORDINATE_5);
    expect(getRoadCenter([
      ZERO_COORDINATE,
      ZERO_COORDINATE,
      TEST_COORDINATE_5,
      TEST_COORDINATE_5
    ])).toEqual(TEST_COORDINATE_11);
    expect(getRoadCenter(TEST_COORDINATES_1)).toEqual(TEST_COORDINATE_12);
    expect(getRoadCenter(TEST_COORDINATES_2)).toEqual(TEST_COORDINATE_6);
    expect(getRoadCenter(TEST_COORDINATES_3)).toEqual(TEST_COORDINATE_2);
  });
});
