// my solution


var sing = function (str) {
  // return the lyrics as a string ...
  var lyrics = [];
  for (var i = 99; i >= 3; i--) {
    lyrics.push(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    lyrics.push(
      "Take one down and pass it around, " +
        (i - 1) +
        " bottles of beer on the wall."
    );
  }
  return lyrics.concat([
    "2 bottles of beer on the wall, 2 bottles of beer.",
    "Take one down and pass it around, 1 bottle of beer on the wall.",
    "1 bottle of beer on the wall, 1 bottle of beer.",
    "Take one down and pass it around, no more bottles of beer on the wall.",
    "No more bottles of beer on the wall, no more bottles of beer.",
    "Go to the store and buy some more, 99 bottles of beer on the wall.",
  ]);
};


// other solutions

var sing = function () {
  var song = [];

  for (var i = 99; i > 0; i--) {
    song.push(
      i +
        " " +
        (i !== 1 ? "bottles" : "bottle") +
        " of beer on the wall, " +
        i +
        (i !== 1 ? " bottles" : " bottle") +
        " of beer."
    );
    song.push(
      "Take one down and pass it around, " +
        (i == 2
          ? "1 bottle"
          : i !== 1
          ? i - 1 + " bottles"
          : "no more bottles") +
        " of beer on the wall."
    );
  }

  song.push("No more bottles of beer on the wall, no more bottles of beer.");
  song.push(
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );

  return song;
};

//

var sing = () =>
  Array(195)
    .fill(0)
    .map((el, i) =>
      i % 2
        ? `Take one down and pass it around, ${
            (197 - i) / 2
          } bottles of beer on the wall.`
        : `${(198 - i) / 2} bottles of beer on the wall, ${
            (198 - i) / 2
          } bottles of beer.`
    )
    .concat([
      `Take one down and pass it around, 1 bottle of beer on the wall.`,
      `1 bottle of beer on the wall, 1 bottle of beer.`,
      `Take one down and pass it around, no more bottles of beer on the wall.`,
      `No more bottles of beer on the wall, no more bottles of beer.`,
      `Go to the store and buy some more, 99 bottles of beer on the wall.`,
    ]);

    //

    const sing = () =>
      [...Array(195)]
        .map((_, idx) =>
          idx % 2
            ? `Take one down and pass it around, ${
                (197 - idx) / 2
              } bottles of beer on the wall.`
            : `${(198 - idx) / 2} bottles of beer on the wall, ${
                (198 - idx) / 2
              } bottles of beer.`
        )
        .concat([
          `Take one down and pass it around, 1 bottle of beer on the wall.`,
          `1 bottle of beer on the wall, 1 bottle of beer.`,
          `Take one down and pass it around, no more bottles of beer on the wall.`,
          `No more bottles of beer on the wall, no more bottles of beer.`,
          `Go to the store and buy some more, 99 bottles of beer on the wall.`,
        ]);



// test

describe("Sample test", function () {
  it("Test", function () {
    let song = sing();
    assert.equal(
      song[0],
      "99 bottles of beer on the wall, 99 bottles of beer."
    );
    assert.equal(
      song[199],
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    );
  });
});