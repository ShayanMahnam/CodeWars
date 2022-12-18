// my solution

const whosOnline = (friends) => {
  // Your code here...
  const online = [];
  const offline = [];
  const away = [];
  friends.map((v) =>
    v.status === "online" && v.lastActivity < 11
      ? online.push(v.username)
      : v.status === "offline"
      ? offline.push(v.username)
      : away.push(v.username)
  );
  if (online.length > 0 && offline.length > 0 && away.length > 0)
    return { online, offline, away };
  if (online.length > 0 && away.length > 0) return { online, away };
  if (online.length > 0 && offline.length > 0) return { online, offline };
  if (offline.length > 0 && away.length > 0) return { offline, away };
  return {};
};


// other solutions

const whosOnline1 = (friends) => {
  let output = {};
  friends.forEach((e) => {
    let status = e.status;
    if (status === "online" && e.lastActivity > 10) status = "away";
    let temp = output[status];
    if (output[status]) {
      output[status].push(e.username);
    } else {
      output[status] = [e.username];
    }
  });
  return output;
};

//

const whosOnline2 = (friends) =>
  friends.reduce((a, { username, status, lastActivity }) => {
    const fStatus = status === "online" && lastActivity > 10 ? "away" : status;
    a[fStatus] ? a[fStatus].push(username) : (a[fStatus] = [username]);
    return a;
  }, {});

  //

  const whosOnline3 = (friends) => {
    let status;

    const getStatus = (friend) =>
      friend.status === "online" && friend.lastActivity > 10
        ? "away"
        : friend.status;

    return friends.reduce(
      (state, friend) => (
        (status = getStatus(friend)),
        (state[status] = state[status] || []),
        state[status].push(friend.username),
        state
      ),
      {}
    );
  };



// test

const Test = require("@codewars/test-compat");

describe("Given examples", function () {
  var friends;

  it("Example test one of each", function () {
    friends = [
      {
        username: "David",
        status: "online",
        lastActivity: 10,
      },
      {
        username: "Lucy",
        status: "offline",
        lastActivity: 22,
      },
      {
        username: "Bob",
        status: "online",
        lastActivity: 104,
      },
    ];
    Test.assertDeepEquals(
      whosOnline(friends),
      {
        online: ["David"],
        offline: ["Lucy"],
        away: ["Bob"],
      },
      "Wrong result for example one of each"
    );
  });

  it("Example test no one online", function () {
    friends = [
      {
        username: "Lucy",
        status: "offline",
        lastActivity: 22,
      },
      {
        username: "Bob",
        status: "online",
        lastActivity: 104,
      },
    ];

    Test.assertDeepEquals(
      whosOnline(friends),
      {
        offline: ["Lucy"],
        away: ["Bob"],
      },
      "Wrong result for example no one online"
    );
  });
});