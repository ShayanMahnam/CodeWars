// my solution

function match(job, candidates) {
  return candidates.filter((candidate) => {
    // Check if candidate desires equity and job offers equity
    if (candidate.desiresEquity && job.equityMax === 0) {
      return false;
    }
    // Check if job location is in candidate's current location or desired locations
    if (
      job.locations.includes(candidate.currentLocation) ||
      job.locations.some((location) =>
        candidate.desiredLocations.includes(location)
      )
    ) {
      return true;
    }
    return false;
  });
}


// other solutions
const intersect = (arra, arrb) => arra.filter((el) => arrb.indexOf(el) > -1);

const matchCandidate = (job, candidate) => {
  let equityMatches = !(candidate.desiresEquity && job.equityMax === 0);
  let desiredLocations = [
    ...candidate.desiredLocations,
    candidate.currentLocation,
  ];
  let locationMatches = intersect(job.locations, desiredLocations).length > 0;
  return equityMatches && locationMatches;
};

const match = (job, candidates) =>
  candidates.filter(matchCandidate.bind(null, job));

///

function match(job, candidates) {
  return candidates.filter(
    (c) =>
      (job.equityMax > 0 || !c.desiresEquity) &&
      job.locations.some(
        (l) => c.currentLocation === l || c.desiredLocations.includes(l)
      )
  );
}




// test
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    let candidates = [
      {
        desiresEquity: true,
        currentLocation: "New York",
        desiredLocations: ["San Francisco", "Los Angeles"],
      },
      {
        desiresEquity: false,
        currentLocation: "San Francisco",
        desiredLocations: ["Kentucky", "New Mexico"],
      },
    ];
    let job1 = { equityMax: 0, locations: ["Los Angeles", "New York"] },
      job2 = { equityMax: 1.2, locations: ["New York", "Kentucky"] };
    Test.assertEquals(match(job1, candidates).length, 0);
    Test.assertEquals(match(job2, candidates).length, 2);
  });
});
