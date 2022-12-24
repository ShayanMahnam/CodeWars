const days = [
  "And a partridge in a pear tree.",
  "Two turtledoves,",
  "Three French hens,",
  "Four calling birds,",
  "Five gold rings (five golden rings),",
  "Six geese a-laying,",
  "Seven swans a-swimming,",
  "Eight maids a-milking,",
  "Nine ladies dancing,",
  "Ten lords a-leaping,",
  "Eleven pipers piping,",
  "Twelve drummers drumming,",
];

function getOrdinalFromCardinal(num) {
  const cardinalToOrdinal = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "fifth",
    6: "sixth",
    7: "seventh",
    8: "eighth",
    9: "ninth",
    10: "tenth",
    11: "eleventh",
    12: "twelfth",
  };
  return cardinalToOrdinal[num];
}

function getFirstLine(num) {
  return `On the ${getOrdinalFromCardinal(
    num
  )} day of Christmas, my true love sent to me,`;
}

function singSong() {
  days.forEach((day, currentDayIndex) => {
    console.log(getFirstLine(currentDayIndex + 1));
    if (currentDayIndex === 0) {
      // special case for first verse
      console.log(`A${day.slice(5)}`);
    } else {
      // get all of the previous days, but reverse them so that we can loop through them using forEach
      const previousDays = days.slice(0, currentDayIndex + 1).reverse();
      previousDays.forEach((prevDay) => console.log(prevDay));
    }
    // add some whitespace to separate the verses
    console.log("");
  });
}

singSong();
