const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {

    const testCase1 = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const testCase2 = [
      "Гарри Поттер",
      "Гарри Поттер",
      "Властелин Колец",
    ];

    const expected1 = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const expected2 = [
      "Властелин Колец",
      "Гарри Поттер",
      "Гарри Поттер",
    ];

    expect(sorting.sortByName(testCase1)).toEqual(expected1);
    expect(sorting.sortByName(testCase2)).toEqual(expected2);
  });
});
