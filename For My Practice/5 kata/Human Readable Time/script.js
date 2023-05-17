// my solution
function humanReadable(seconds) {
  // Calculate the number of hours
  const hours = Math.floor(seconds / 3600);

  // Calculate the number of remaining minutes
  const minutes = Math.floor((seconds % 3600) / 60);

  // Calculate the number of remaining seconds
  const remainingSeconds = seconds % 60;

  // Format the time components to have leading zeros if necessary
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  // Concatenate the formatted time components to form the human-readable format
  const humanReadableTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  return humanReadableTime; // Return the human-readable time format
}



// other solutions
function humanReadable(seconds) {
  var pad = function (x) {
    return x < 10 ? "0" + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ":" +
    pad(parseInt((seconds / 60) % 60)) +
    ":" +
    pad(seconds % 60)
  );
}

//

function humanReadable(seconds) {
  var hours = parseInt(seconds / 3600);
  var minutes = parseInt(seconds / 60) % 60;
  var seconds = seconds % 60;

  var pad = function (val) {
    return val < 10 ? "0" + val : val;
  };

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

//

function humanReadable(seconds) {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map(function (v) {
      v = Math.floor(v).toString();
      return v.length == 1 ? "0" + v : v;
    })
    .join(":");
}

//

function humanReadable(seconds) {
  var HH, MM, SS;
  HH = "0" + Math.floor(seconds / 3600);
  seconds -= HH * 3600;
  MM = "0" + Math.floor(seconds / 60);
  seconds -= MM * 60;
  SS = "0" + seconds;
  return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
}




// test

const strictEqual = require("chai").assert.strictEqual;

describe("tests", function () {
  it("should format correctly", function () {
    strictEqual(humanReadable(0), "00:00:00", "humanReadable(0)");
    strictEqual(humanReadable(59), "00:00:59", "humanReadable(59)");
    strictEqual(humanReadable(60), "00:01:00", "humanReadable(60)");
    strictEqual(humanReadable(90), "00:01:30", "humanReadable(90)");
    strictEqual(humanReadable(3599), "00:59:59", "humanReadable(3599)");
    strictEqual(humanReadable(3600), "01:00:00", "humanReadable(3600)");
    strictEqual(humanReadable(45296), "12:34:56", "humanReadable(45296)");
    strictEqual(humanReadable(86399), "23:59:59", "humanReadable(86399)");
    strictEqual(humanReadable(86400), "24:00:00", "humanReadable(86400)");
    strictEqual(humanReadable(359999), "99:59:59", "humanReadable(359999)");
  });
});