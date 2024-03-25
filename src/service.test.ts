import { getRange, getRoadLength } from "./service";

const ZERO_COORDINATE = [0, 0];
const TEST_COORDINATE_1 = [3, 4];
const TEST_COORDINATE_2 = [11, -2];

describe("getRange test", () => {
  it("function works", () => {
    expect(getRange(ZERO_COORDINATE, ZERO_COORDINATE)).toEqual(0);
  });

  it("function counts correctly", () => {
    expect(getRange(ZERO_COORDINATE, TEST_COORDINATE_1)).toEqual(5);
    expect(getRange(TEST_COORDINATE_1, TEST_COORDINATE_2)).toEqual(10);
  });
});

const TEST_COORDINATES_1 = [ZERO_COORDINATE, TEST_COORDINATE_1, TEST_COORDINATE_2];
const TEST_COORDINATES_2 = [
  ZERO_COORDINATE,
  [10, 0],
  [10, 10]
];
const TEST_COORDINATES_3 = [
  ZERO_COORDINATE,
  TEST_COORDINATE_1,
  TEST_COORDINATE_2,
  [11, 8],
  [16, 8]
];

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